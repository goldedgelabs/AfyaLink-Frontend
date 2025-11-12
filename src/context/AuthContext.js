'use client';
import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(()=>{ const t = localStorage.getItem('afya_token'); if(t) setUser({ username:'admin', role:'superadmin' }); },[]);
  const login = (token,userObj)=>{ localStorage.setItem('afya_token', token); setUser(userObj); };
  const logout = ()=>{ localStorage.removeItem('afya_token'); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
