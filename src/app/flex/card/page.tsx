import Card from "@/components/flex/Card";
import Pagina from "@/components/templates/Pagina";
import Titulo from "@/components/templates/Titulo";

export default function CardPage() {
	return (
		<Pagina className="flex flex-col gap-7">
			<Titulo texto="Card com Flexbox" subtexto="Um card com título e conteúdo" />
			<div>
				<Card />
			</div>
		</Pagina>
	);
}
