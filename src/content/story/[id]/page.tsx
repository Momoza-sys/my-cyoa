import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

//This is where the MDX files live
const storyDir = path.join(process.cwd(), 'src', 'content', 'story');

export default async function StoryPage({ params }: { params: { id: string } }) {
    const filePath = path.join(storyDir, `${params.id}.mdx`);

    if (!fs.existsSync(filePath)){
        return <div>Story not found</div>;
    }

    const source = fs.readFileSync(filePath, 'utf8');
    const {content} = matter(source);

    return (
        <main className ="prose"><MDXRemote source={content}/>
        </main>
    );
    

}