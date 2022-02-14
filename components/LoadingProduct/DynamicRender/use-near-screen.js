import useOnScreen from "./use-on-screen";

function useNearScreen({ offset = "200px" } = {}) {
  return useOnScreen({ once: true, offset });
}

export default useNearScreen;
