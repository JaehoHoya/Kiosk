// CategoryNavbar.js

import React, { useEffect } from 'react';
import styles from './style.module.css';
import CategoryButton from './CategoryButton';
import useSpeechToText from '../Speech';

interface CategoryNavbarProps {
  categories: { categoryId: number; categoryName: string }[];
  handleCategoryClick: (categoryId: number) => void;
  activeCategoryId: number;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({ categories, handleCategoryClick, activeCategoryId }) => {
  const { transcript, listening, toggleListening,resetTranscript } = useSpeechToText();

  useEffect(() => {
    // categories 배열이 비어있지 않은 경우에만 첫 번째 카테고리의 상품을 표시
    if (categories.length > 0) {
      handleCategoryClick(categories[0].categoryId);
    }
  }, [categories]); 

  useEffect(() => {
    const words = transcript.split(' '); // 음성 입력을 공백을 기준으로 단어로 분리
    const matchingCategory = categories.find(category => words.includes(category.categoryName));
    if (matchingCategory) {
      handleCategoryClick(matchingCategory.categoryId);
      resetTranscript(); // 일치하는 카테고리 버튼이 눌렸을 때 음성값 초기화
    } 
  }, [transcript, categories, handleCategoryClick]);

  return (
    <>
      <div className={styles.CategoryWrapper}>
        <div className={styles.CategoryTitle}>하는중</div>
        <textarea className="transcript" value={transcript} onChange={() => {}} />
        <button onClick={toggleListening}>
          {listening ? '음성인식 중지' : '음성인식 시작'}
        </button>
      </div>
      <div className={styles.categoryNavbar}>
        {categories.map(category => (
          <CategoryButton
            categoryId={category.categoryId}
            categoryName={category.categoryName}
            key={category.categoryId} 
            isActive={category.categoryId === activeCategoryId}
            onclick={() => handleCategoryClick(category.categoryId)} 
          />
        ))}
      </div>
    </>
  );
};

export default CategoryNavbar;
