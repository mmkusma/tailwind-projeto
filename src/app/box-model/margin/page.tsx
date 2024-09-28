import Pagina from "@/components/templates/Pagina";
import Titulo from "@/components/templates/Titulo";

export default function MarginPage() {
	return (
		<Pagina className="flex flex-col gap-7">
			<Titulo
				texto="Utilizando Margin"
				subtexto="Espaçamento externo do conteúdo"
			/>
			<div>
				<div className="inline-block bg-blue-500 m-7">Conteudo</div>
				<div className="inline-block bg-blue-500 mt-7">Conteudo</div>
				<div className="inline-block bg-blue-500 mb-7">Conteudo</div>
				<div className="inline-block bg-blue-500 mx-7">Conteudo</div>
				<div className="inline-block bg-blue-500 my-7">Conteudo</div>
			</div>
		</Pagina>
	);
}
