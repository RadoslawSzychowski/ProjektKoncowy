import React, { createContext, useState, useEffect } from 'react';
import supabase from './/supabaseClient';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Błąd podczas pobierania sesji:', error);
            } else {
                setUser(data?.session?.user || null);
            }
            setLoading(false);
        };

        init();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            if (event === 'SIGNED_IN') {
                setUser(session?.user);
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
            }
        });

        return () => {
            if (authListener?.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
        } catch (error) {
            console.error('Błąd logowania:', error);
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (email, password) => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
        } catch (error) {
            console.error('Błąd rejestracji:', error);
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (error) {
            console.error('Błąd wylogowania:', error);
            alert(error.error_description || error.message);
        } finally {
            setUser(null);
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signUp, logout, loading }}>{!loading && children}</AuthContext.Provider>
    );
};

export default AuthProvider;
