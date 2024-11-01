import React, { useState } from 'react';
import TemplateOptions from './TemplateOptions';
import EmailTemplate from './EmailTemplate';
import './App.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState({});

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    setFormData({}); // テンプレート変更時にフォームデータをリセット
  };

  return (
    <div className="App">
      <h1>ごめんねジェネレーター</h1>
      <TemplateOptions
        onTemplateSelect={handleTemplateChange}
        formData={formData}
        setFormData={setFormData}
      />
      <EmailTemplate templateType={selectedTemplate} formData={formData} />
    </div>
  );
}

export default App;