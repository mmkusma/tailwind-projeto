import React from "react";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

export interface MenuProps {
	className?: string;
}

const Menu = (props: MenuProps) => {
	return (
		<aside className={`${props.className ?? ""}`}>
			<nav className="flex flex-col gap-6">
				<MenuGrupo label="Box Model">
					<MenuItem label="Padding" href="/box-model/padding" />
					<MenuItem label="Margin" href="/box-model/margin" />
					<MenuItem label="Border" href="/border" />
					<MenuItem label="Width" href="/width" />
				</MenuGrupo>
				<MenuGrupo label="Display">
					<MenuItem label="Block" href="/display/block" />
					<MenuItem label="Inline" href="/inline" />
					<MenuItem label="Inline-block" href="/inline-block" />
				</MenuGrupo>
				<MenuGrupo label="Flexbox">
					<MenuItem label="Flex Container" href="/flex" />
					<MenuItem label="Flex Item" href="/flex-item" />
					<MenuItem label="Flex Direction" href="/flex-direction" />
					<MenuItem label="Exemplo de card" href="/flex/card" />
				</MenuGrupo>
				<MenuGrupo label="Responsividade">
					<MenuItem label="Media Query" href="/media-query" />
					<MenuItem label="Breakpoints" href="/grid" />
					<MenuItem label="Mobile first" href="/mobile-first" />
				</MenuGrupo>
				<MenuGrupo label="Grid">
					<MenuItem label="Grid Container" href="/grid-container" />
					<MenuItem label="Grid Item" href="/grid-item" />
					<MenuItem label="Grid Template Columns" href="/grid-template-columns" />
				</MenuGrupo>
			</nav>
		</aside>
	);
};

export default Menu;
