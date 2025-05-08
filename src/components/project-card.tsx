import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}


export function ProjectCard({ title, description, tags, link }: Props) {
  const CardWrapper = link ? 'a' : 'div';
  const isPlendify = title === "Plendify";

  return (
    <CardWrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${link ? 'cursor-pointer' : ''}`}
    >
      <Card className={`flex flex-col h-full overflow-hidden border border-gray-800 bg-black text-white p-3 transition-all duration-300 ease-in-out group-hover:border-gray-700 group-hover:-translate-y-1 ${isPlendify ? 'border-gray-700' : ''}`}>
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {title}
              {link && <span className="ml-1 h-1 w-1 rounded-full bg-green-500 inline-block"></span>}
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <CardDescription className="text-xs text-gray-500">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-xs bg-zinc-800 text-gray-400"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
