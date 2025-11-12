import { useState, useRef, useEffect, useCallback } from 'react';

export function useWhatsAppScroll() {
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);

    const handleScroll = useCallback((container) => {
        if (!isScrolling) {
            setIsScrolling(true);
            container.classList.add('scrolling');
        }

        // Limpiar timeout anterior
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Ocultar scrollbar después de 1.5 segundos sin scroll
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
            container.classList.remove('scrolling');
        }, 1500);
    }, [isScrolling]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return handleScroll;
}