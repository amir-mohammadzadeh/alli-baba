import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const useBackButton = (noHashHandler) => {
    const locatin = useLocation()
    const oldUrl = useRef(null)
    const navigate = useNavigate()

    const modalCloseAction = () => {
        noHashHandler && noHashHandler()
        navigate(oldUrl.current.path, { replace: true, state: oldUrl.current.state })
    };

    useEffect(() => {
        oldUrl.current = {
            path: `${locatin.pathname}${locatin.search || ''}`,
            state: locatin.state
        }

        navigate(oldUrl.current.path + '#modal-open', { state: locatin.state })
        const eventAction = (e) => {
            if (!locatin.hash) {
                noHashHandler && noHashHandler()
            }
        };

        window.addEventListener("hashchange", eventAction);
        return () => window.removeEventListener('hashchange', eventAction)

    }, []);

    return modalCloseAction

}
export default useBackButton