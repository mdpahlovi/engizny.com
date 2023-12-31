"use client";

import { useEffect } from "react";
import { Collapse, Badge } from "../Common/MTComponent";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleCardDrawer, toggleClose, toggleOpen, toggleWishlistDrawer } from "@/redux/features/navbar/toggleNavSlice";
import { Bars3Icon, XMarkIcon, ClipboardDocumentListIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export function ToggleButton() {
    const dispatch = useAppDispatch();
    const { open } = useAppSelector((state) => state.toggleNav);
    const { wishlist } = useAppSelector((state) => state.wishlist);
    const { cards } = useAppSelector((state) => state.card);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && dispatch(toggleClose()));
    }, [dispatch]);

    return (
        <>
            <Badge invisible={wishlist.length === 0} content={wishlist.length}>
                <ClipboardDocumentListIcon className="w-5 h-5 cursor-pointer" onClick={() => dispatch(toggleWishlistDrawer())} />
            </Badge>
            <Badge invisible={cards.length === 0} content={cards.length}>
                <ShoppingCartIcon className="w-5 h-5 cursor-pointer" onClick={() => dispatch(toggleCardDrawer())} />
            </Badge>
            {open ? (
                <XMarkIcon onClick={() => dispatch(toggleClose())} className="w-5 h-5 cursor-pointer lg:hidden" />
            ) : (
                <Bars3Icon onClick={() => dispatch(toggleOpen())} className="w-5 h-5 cursor-pointer lg:hidden" />
            )}
        </>
    );
}

export function NavCollapse({ children }: { children: React.ReactNode }) {
    const { open } = useAppSelector((state) => state.toggleNav);

    return <Collapse open={open}>{children}</Collapse>;
}
