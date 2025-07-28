import { Bio } from "@/components/Bio";
import { Book } from "@/components/Book";
import { Characters } from "@/components/Characters";
import { Links } from "@/components/Links";
import { Video } from "@/components/Video";


export default function Home() {
  return (
<>
	<Book/>
	<Video/>
	<Links/>
	<Bio/>
	<Characters/>
</>
  );
}
