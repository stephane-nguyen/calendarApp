/**
 * know user's state, if user is logged in or logged out
 */

import { useState, useEffect } from 'react';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

  

    return { user, isLoading };
}

export default useUser;