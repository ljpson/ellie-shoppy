import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({children, requireAdmin}) {
    //로그인한 사용자가 있는지 확인
    const {user} = useAuthContext();

    // 사용자가 없거나 어드민이 필요한데 어드민이 아니면
    if (!user || (requireAdmin && !user.isAdmin)) {
        return <Navigate to="/" replace />;
    }
    return children;
}

