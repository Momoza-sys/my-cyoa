import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Choice from '@/components/Choice';

//This is where the MDX files live
const storyDir = path.join(process.cwd(), 'src', 'content', 'story');

const components = {
  Choice: Choice
}

export default async function StoryPage({ params }: { params: { id: string } }) {
    const filePath = path.join(storyDir, `${params.id}.mdx`);

    if (!fs.existsSync(filePath)){
        return <div>Story not found</div>;
    }

    const source = fs.readFileSync(filePath, 'utf8');
    const {content} = matter(source);

    return (
        <main className="prose max-w-2xl mx-auto p-4">
            <MDXRemote source={content} components={components} s={undefined} />
        </main>
    );
}