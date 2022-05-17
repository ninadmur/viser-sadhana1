import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const EditorJs = dynamic(() => import('react-editor-js'), { ssr: false });

let editorInstance;

const Editor = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editorTools, setEditorTools] = useState();

  const onSaveHandler = async (editorInstance) => {
    try {
      const blogData = await editorInstance.save();
      if (!title || title === '')
        throw new Error('Title cannot be empty. Please enter title');
      if (!blogData.blocks[0])
        throw new Error('Blog cannot be empty. Please enter some data');
      props.onSave(blogData, title, description);
    } catch (err) {
      console.log(err);
    }
  };

  let editorComponent;
  if (!editorTools) editorComponent = 'Loading...';
  else {
    editorComponent = (
      <div className="w-full">
        <EditorJs
          className="w-full"
          instanceRef={(instance) => (editorInstance = instance)}
          tools={editorTools}
          placeholder={`Let's write an awesome blog!`}
        />
      </div>
    );
  }

  useEffect(() => {
    const importConstants = async () => {
      const tools = (await import('../Editor/EditorConstants')).default;
      setEditorTools(tools);
    };

    importConstants();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="px-6 flex flex-col items-center w-full">
        <input
          className="block w-1/2 h-8 text-center"
          placeholder="Your Blog Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          className="block w-1/2 h-8 text-center"
          placeholder="Your Blog Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      {editorComponent}

      <div>
        <button onClick={() => onSaveHandler(editorInstance)}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
