import { useRef, useEffect, useCallback, useState } from 'react';
import { useWhatsAppScroll } from './useWhatsAppScroll';
import MessageBubble from './MessageBubble';
import './BodyChatPanel.css';

function BodyChatPanel({ messages = [] }) {
    const messagesEndRef = useRef(null);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const handleScroll = useWhatsAppScroll();
    const [thumbStyle, setThumbStyle] = useState({ height: '0px', top: '0px' });
    const draggingRef = useRef(false);

    const onScroll = useCallback(() => {
        if (containerRef.current) {
            handleScroll(containerRef.current);
            // update custom overlay thumb position
            const el = containerRef.current;
            const visibleRatio = el.clientHeight / el.scrollHeight;
            const thumbH = Math.max(visibleRatio * el.clientHeight, 20); // min size
            const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
            const thumbTop = scrollRatio * (el.clientHeight - thumbH);
            setThumbStyle({ height: `${thumbH}px`, top: `${thumbTop}px` });
        }
    }, [handleScroll]);

    // Drag handlers for the thumb
    const onThumbPointerDown = useCallback((e) => {
        // Only left button / primary pointer
        if (e.button && e.button !== 0) return;
        e.preventDefault();
        const el = containerRef.current;
        const wrapper = wrapperRef.current;
        if (!el || !wrapper) return;

        const scrollableHeight = el.scrollHeight - el.clientHeight || 1;
        const wrapperHeight = wrapper.clientHeight;
        const thumbH = parseFloat(thumbStyle.height) || Math.max((el.clientHeight / el.scrollHeight) * el.clientHeight, 20);

        const track = Math.max(wrapperHeight - thumbH, 1);
        const startScrollTop = el.scrollTop;
        const startTop = (startScrollTop / scrollableHeight) * track;
        const startY = e.clientY;

        draggingRef.current = true;

        const onPointerMove = (ev) => {
            if (!draggingRef.current) return;
            const dy = ev.clientY - startY;
            const newTop = Math.min(Math.max(startTop + dy, 0), track);
            const newScrollTop = (newTop / track) * scrollableHeight;
            el.scrollTop = newScrollTop;
            // update thumb immediately for responsiveness
            setThumbStyle({ height: `${thumbH}px`, top: `${newTop}px` });
        };

        const onPointerUp = () => {
            draggingRef.current = false;
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
    }, [thumbStyle]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ 
                behavior: 'smooth'
            });
        }
        // update thumb after messages change (content size changed)
        if (containerRef.current) {
            const el = containerRef.current;
            const visibleRatio = el.clientHeight / el.scrollHeight;
            const thumbH = Math.max(visibleRatio * el.clientHeight, 20);
            const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
            const thumbTop = scrollRatio * (el.clientHeight - thumbH);
            setThumbStyle({ height: `${thumbH}px`, top: `${thumbTop}px` });
        }
    }, [messages]);

    return (
        <div className="body-chat-panel h-100 w-100">
            <div ref={wrapperRef} className="messages-wrapper h-100 w-100 p-4">
                <div 
                    ref={containerRef}
                    className="messages-container h-100 w-100"
                    onScroll={onScroll}
                    tabIndex={0} // make container focusable for keyboard scrolling
                >
                    {messages.map((message) => (
                        <MessageBubble key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* overlay scrollbar (visual only, doesn't affect layout) */}
                <div className="scrollbar-overlay" aria-hidden>
                    <div 
                        className="scrollbar-thumb"
                        style={{ height: thumbStyle.height, top: thumbStyle.top }}
                        onPointerDown={onThumbPointerDown}
                    />
                </div>
            </div>
        </div>
    );
}

export default BodyChatPanel;