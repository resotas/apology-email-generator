import React from 'react';

function TemplateOptions({ onTemplateSelect, formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTemplateChange = (e) => {
    const selectedTemplate = e.target.value;
    onTemplateSelect(selectedTemplate);
    setFormData({ ...formData, template: selectedTemplate }); // テンプレート名を明示的に保存
  };

  return (
    <div>
      <h2>テンプレートの選択</h2>
      <select onChange={handleTemplateChange}>
        <option value="">テンプレートを選択してください</option>
        <option value="estimate">見積書の送り忘れ</option>
        <option value="reply">メールの返信忘れ</option>
        <option value="mistakeReport">ミス報告</option>
      </select>

      <div>
        <h3>詳細入力</h3>
        <input
          type="text"
          name="companyName"
          placeholder="会社名（例: △△株式会社）"
          value={formData.companyName || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="departmentName"
          placeholder="部署名（例: 〇〇部）"
          value={formData.departmentName || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contactName"
          placeholder="担当者名"
          value={formData.contactName || ''}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="senderName"
          placeholder="あなたの名前"
          value={formData.senderName || ''}
          onChange={handleInputChange}
        />

        {/* ミス報告テンプレート用の追加フィールド */}
        {formData.template === "mistakeReport" && (
          <>
            <textarea
              name="mistakeDetails"
              placeholder="ミスの内容や経緯を入力してください"
              value={formData.mistakeDetails || ''}
              onChange={handleInputChange}
              rows="3"
            />
            <textarea
              name="preventionMeasures"
              placeholder="再発防止策を入力してください"
              value={formData.preventionMeasures || ''}
              onChange={handleInputChange}
              rows="3"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TemplateOptions;