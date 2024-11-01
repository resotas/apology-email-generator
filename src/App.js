import './App.css';
import React, { useState } from 'react';
import TemplateOptions from './TemplateOptions';
import EmailTemplate from './EmailTemplate';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState({});

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    setFormData({}); // Reset form data when changing template
  };

  return (
    <div className="App">
      <h1>謝罪メール生成アプリ</h1>
      <TemplateOptions onTemplateSelect={handleTemplateChange} formData={formData} setFormData={setFormData} />
      <EmailTemplate templateType={selectedTemplate} formData={formData} />
    </div>
  );
}

export default App;