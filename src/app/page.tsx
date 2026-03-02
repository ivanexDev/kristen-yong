import { Bio } from "@/components/Bio";
import { Book } from "@/components/Book";
import { Characters } from "@/components/Characters";
import { Video } from "@/components/Video";


export default function Home() {
  return (
<main>
	<Book/>
	<Video/>
	<Bio/>
	<Characters/>
</main>
  );
}
