import Head from 'next/head';
import Editor from '../../../components/admin/Editor/Editor';
import Sidebar from '../../../components/admin/admin-sidebar';

const CreateBlog = () => {
  const onSaveHandler = async (blogData, title, description) => {
    const toSaveData = {
      title,
      blogData,
      description,
    };

    console.log(toSaveData);
    //make your ajax call to send the data to your server and save it in a database
  };

  return (
    <div>
      <h1 className="text-center text-2xl mb-5 font-bold">NEW BLOG</h1>
      <Editor
        onSave={(editorData, title, description) =>
          onSaveHandler(editorData, title, description)
        }
      />
    </div>
  );
};

export default CreateBlog;
