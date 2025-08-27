import React from 'react'

function Finderandreplacer() {

    const [text, setText] = React.useState('');
    const [find, setFind] = React.useState('');
    const [replace, setReplace] = React.useState('');

    const handleFind = () => {
        const textarea = document.getElementById('textInput');
        const startIndex = textarea.value.indexOf(find);
        if (startIndex !== -1) {
            const endIndex = startIndex + find.length;
            textarea.setSelectionRange(startIndex, endIndex);
            textarea.focus();
        }
    };

    const handleReplace = () => {
        const textarea = document.getElementById('textInput');
        const newText = textarea.value.replace(find, replace);
        setText(newText);
    };

  return (
    <div style={{ padding: '0px', paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px', maxWidth: '600px', margin: '0 auto', marginTop: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>📄Finder and Replacer</h1>
      <textarea name="text" id="textInput" placeholder="Enter text here..." style={style.textarea} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <input type="text" placeholder="Find..." style={style.input} value={find} onChange={(e) => setFind(e.target.value)} />
      <input type="text" placeholder="Replace with..." style={style.input} value={replace} onChange={(e) => setReplace(e.target.value)} />
      <button style={style.button} onClick={handleFind}>Find</button>
      <button style={style.button} onClick={handleReplace}>Replace</button>
    </div>
  )
}

const style = {
  textarea: {
    width: '100%',
    height: '200px',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
    outline: 'none',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#1980b8ff',
    color: 'white',
    cursor: 'pointer',
    marginRight: '10px',
  },
};

export default Finderandreplacer;
