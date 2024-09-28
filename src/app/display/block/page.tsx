import Pagina from "@/components/templates/Pagina";
import Titulo from "@/components/templates/Titulo";

export default function BlockPage() {
	return (
		<Pagina className="flex flex-col gap-7">
			<Titulo
				texto="Utilizando Block"
				subtexto="O elemento ocupa toda a largura disponível"
			/>
			<div>
				<div>Linha 1</div>
				<span className="block">Linha 2</span>
				<span className="block">Linha 3</span>
				<div>Linha 4</div>
			</div>
		</Pagina>
	);
}
