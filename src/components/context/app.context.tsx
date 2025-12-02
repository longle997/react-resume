/**
 * APPLICATION CONTEXT PROVIDER
 * 
 * This file implements React Context API for global state management across the portfolio application.
 * It specifically handles theme management (light/dark mode) with persistence to localStorage,
 * allowing users to maintain their theme preference between sessions.
 * 
 * Features:
 * - Theme state management (light/dark mode)
 * - localStorage persistence for theme preferences
 * - Bootstrap data-bs-theme attribute synchronization
 * - Type-safe context with TypeScript interfaces
 * - Custom hook for consuming context with error handling
 * 
 * Usage:
 * - Wrap the entire app with AppContextProvider in main.tsx
 * - Use useCurrentApp() hook in any component to access/modify theme
 * 
 * @see Bootstrap 5 dark mode documentation for data-bs-theme usage
 */

// Import React hooks and types for context creation and state management
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define TypeScript interface for the context value structure
interface AppContextType {
    theme: string; // Current theme value ("light" or "dark")
    setTheme: (theme: string) => void; // Function to update theme state
}

// Create React Context with null as initial value (will be populated by provider)
const AppContext = createContext<AppContextType | null>(null);

// Define props interface for the provider component
interface AppContextProviderProps {
    children: ReactNode; // Child components that will have access to the context
}

// Main context provider component that manages global application state
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    // Initialize theme state with lazy initialization from localStorage
    const [theme, setTheme] = useState<string>(() => {
        // Retrieve theme from localStorage or default to "light" if not found
        const initialTheme = localStorage.getItem("theme") || "light";
        return initialTheme;
    });

    // Effect hook to synchronize theme with DOM and localStorage on component mount
    useEffect(() => {
        // Get theme preference from localStorage
        const mode = localStorage.getItem("theme");
        if (mode) {
            // Update component state with stored theme
            setTheme(mode);
            // Apply theme to HTML element for Bootstrap dark mode integration
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, []) // Empty dependency array means this runs only once on mount

    return (
        // Provide context value to all child components
        <AppContext.Provider value={{
            theme, // Current theme state
            setTheme // Function to update theme state
        }}>
            {/* Render all child components with context access */}
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to consume the application context with error handling
export const useCurrentApp = (): AppContextType => {
    // Attempt to get context value
    const currentAppContext = useContext(AppContext);

    // Throw error if hook is used outside of provider (development safeguard)
    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    // Return context value with full type safety
    return currentAppContext;
};
