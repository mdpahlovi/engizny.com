import Footer from "./Footer";
import Navbar from "./Navbar";
import AllDrawers from "./Drawer";
import ReduxProvider from "../Common/ReduxProvider";
import { ThemeProvider } from "../Common/MTComponent";

export default function Main({ children }: { children: React.ReactNode }) {
    const theme = {
        navbar: {
            styles: {
                base: {
                    navbar: {
                        blurred: { borderColor: "", borderWidth: "border-b" },
                        fullWidth: { maxWidth: "", px: "", rounded: "", width: "" },
                        initial: { borderRadius: "", display: "", maxWidth: "", px: "", py: "py-2.5", width: "" },
                    },
                },
                variants: { filled: { white: { backgroud: "", color: "" } } },
            },
        },
        collapse: { styles: { base: { width: "container mx-auto px-6" } } },
        input: {
            defaultProps: { size: "lg" },
            styles: {
                base: { icon: { color: "" }, input: { color: "" }, label: { color: "peer-placeholder-shown:text-content/70" } },
                variants: {
                    outlined: {
                        base: {
                            input: { borderColor: "placeholder-shown:border-edge placeholder-shown:border-t-edge" },
                        },
                        colors: {
                            label: {
                                blue: {
                                    after: "after:border-content/70 peer-focus:after:!border-primary",
                                    before: "before:border-content/70 peer-focus:before:!border-primary",
                                    color: "text-content/70 peer-focus:text-primary",
                                },
                            },
                            input: { blue: { borderColor: "border-content/70", borderColorFocused: "focus:border-primary" } },
                        },
                    },
                },
            },
        },
        button: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { fontSize: "", borderRadius: "rounded-full" },
                    md: { fontSize: "", borderRadius: "rounded-full" },
                    lg: { fontSize: "", borderRadius: "rounded-full" },
                },
                variants: {
                    filled: {
                        blue: { backgroud: "bg-primary", hover: "hover:shadow-md hover:shadow-primary/30", shadow: "" },
                        gray: { active: "", backgroud: "bg-content/20", color: "", focus: "", hover: "", shadow: "" },
                    },
                    outlined: {
                        blue: {
                            border: "border border-primary",
                            color: "text-primary",
                            focus: "",
                            hover: "hover:bg-primary hover:text-white",
                        },
                    },
                },
            },
        },
        iconButton: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { fontSize: "", borderRadius: "rounded-full" },
                    md: { fontSize: "", borderRadius: "rounded-full" },
                    lg: { fontSize: "", borderRadius: "rounded-full" },
                },
                variants: {
                    filled: { blue: { backgroud: "bg-primary", hover: "hover:shadow-md hover:shadow-primary/30", shadow: "" } },
                    outlined: { blue: { border: "border border-primary", color: "text-primary", focus: "" } },
                },
            },
        },
        card: {
            styles: {
                base: { shadow: { boxShadow: "border shadow-lg" } },
                variants: { filled: { white: { backgroud: "bg-background", color: "text-content" } } },
            },
        },
        badge: {
            styles: {
                base: {
                    badge: {
                        initial: { fontSize: "text-[10px]", fontWeight: "", paddingX: "px-0.5", paddingY: "py-0.5" },
                        withContent: { minHeight: "min-h-[14px]", minWidth: "min-w-[14px]" },
                    },
                },
            },
        },
    };

    return (
        <ReduxProvider>
            <ThemeProvider value={theme}>
                <Navbar />
                {children}
                <Footer />
                <AllDrawers />
            </ThemeProvider>
        </ReduxProvider>
    );
}
