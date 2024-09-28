import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Card() {
	return (
		<div className="flex flex-col gap-2 bg-zinc-800 w-96 p-4 rounded-md">
			<div className="w-full h-64 relative">
				<div
					className="absolute z-50
                    top-2 left-2 
                    px-2 py-1.5
                    bg-black text-white
                    text-xs rounded-full"
				>
					39% off
				</div>
				<Image
					src="https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-branco-rose-feminino-court-vison-lo-76653/299727-1.jpg?w=670&h=670&v=no-change&qs=ignore"
					alt="Imagem de um card"
					className="rounded-md object-cover"
					fill
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="text-lg">
					Tênis Casual Nike Branco Rose Feminino Court Vison Lo
				</div>
				<div className="flex justify-between items-center">
					<div>
						<span className="text-2xl font-bold">R$ 199,90</span>
						<span className="text-zinc-400 text-sm line-through">R$ 199,90</span>
					</div>
					<div className="flex gap-0.5">
						<IconStarFilled size={18} className="text-yellow-400" />
						<IconStarFilled size={18} className="text-yellow-400" />
						<IconStarFilled size={18} className="text-yellow-400" />
						<IconStarFilled size={18} className="text-yellow-400" />
						<IconStarFilled size={18} className="text-yellow-400" />
					</div>
				</div>
				<button className="botao">Comprar</button>
			</div>
		</div>
	);
}
