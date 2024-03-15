import React from 'react'
import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuIndicator,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      NavigationMenuViewport,
    } from "@/components/ui/navigation-menu"

     
     
const Navigation = () => {
  return (
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <NavigationMenuLink>Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  )
}

export default Navigation