import { useMediaQuery, useTheme } from "fantasy-baseball-ui";

export const useResponsive = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.up("xs"));
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    return { isXs: isXs && !isSm, isSm: isSm && !isMd, isMd: isMd && !isLg, isLg: isLg && !isXl, isXl };
};
