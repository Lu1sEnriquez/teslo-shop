import { create } from 'zustand'

interface State {
    isSideMenuOpen: boolean;
    openSideMenu : ()=> void;
    closeSideMenu : ()=> void;
}


// manejo del stadoglobal del sidebard
export const useUIStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    openSideMenu: ()=>set({isSideMenuOpen: true}),
    closeSideMenu: ()=>set({isSideMenuOpen: false}),
}))