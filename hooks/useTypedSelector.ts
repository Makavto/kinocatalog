import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../core/store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector