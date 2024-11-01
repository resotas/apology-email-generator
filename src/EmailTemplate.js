import React, { useState } from 'react';

function EmailTemplate({ templateType, formData }) {
  const [copySuccess, setCopySuccess] = useState('');

  const templates = {
    estimate: `
      ${formData.companyName || '△△株式会社'}  
      ${formData.departmentName || '〇〇部'} ${formData.contactName || '担当者名'} 様
      
      お世話になっております。  
      △△株式会社の${formData.senderName || 'ご自身の名前'}でございます。
      
      このたびは、貴社からご依頼いただいておりました見積書の送付が遅れてしまい、ご迷惑をおかけしましたことを心よりお詫び申し上げます。  
      今後はこのようなことがないよう、再発防止策を徹底いたします。
      
      何卒ご容赦賜りますようお願い申し上げます。  
      引き続きどうぞよろしくお願いいたします。
    `,
    reply: `
      ${formData.companyName || '△△株式会社'}  
      ${formData.departmentName || '〇〇部'} ${formData.contactName || '担当者名'} 様
      
      お世話になっております。  
      △△株式会社の${formData.senderName || 'ご自身の名前'}でございます。
      
      このたびは、貴社からのご連絡に対し、ご返信が遅れてしまい大変申し訳ございませんでした。  
      今後はこのようなことがないよう、確認体制を見直し、迅速な対応に努めて参ります。
      
      何卒ご容赦賜りますようお願い申し上げます。  
      引き続きどうぞよろしくお願いいたします。
    `,
    mistakeReport: `
      ${formData.companyName || '△△株式会社'}  
      ${formData.departmentName || '〇〇部'} ${formData.contactName || '担当者名'} 様
      
      お世話になっております。  
      △△株式会社の${formData.senderName || 'ご自身の名前'}でございます。
      
      このたびは、${formData.mistakeDetails || 'ミスの詳細が記入されていません'}に関して、貴社にご迷惑をおかけしましたことを心よりお詫び申し上げます。  
      
      現在、再発防止策として、${formData.preventionMeasures || '再発防止策が記入されていません'}を実施する所存です。
      
      何卒ご容赦賜りますようお願い申し上げます。  
      引き続きどうぞよろしくお願いいたします。
    `,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(templates[templateType])
      .then(() => setCopySuccess('コピーしました！'))
      .catch(() => setCopySuccess('コピーに失敗しました'));
  };

  return (
    <div>
      <h2>生成された謝罪メール</h2>
      <pre>{templates[templateType]}</pre>
      <button onClick={handleCopy}>コピー</button>
      {copySuccess && <p>{copySuccess}</p>}
    </div>
  );
}

export default EmailTemplate;