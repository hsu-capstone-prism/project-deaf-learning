import React from "react";
import Layout from "../Layout";
import "../../../styles/GrammerPage.css";

const SentencePage = () => {
  return (
    <Layout>
      <div className="sentence-page">
        <h1 className="section-title">문법 연습</h1>

        <section className="learning-section">
          <h2>문법 연습</h2>
          <div className="box-container">
            <div className="box">기본 문장 구조</div>
            <div className="box">문장 내 모음 발음</div>
            <div className="box">문장 내 자음 발음</div>
            <div className="box">문장 내 음운 변동</div>
            <div className="box">사잇소리 현상</div>
            <div className="box">문장 내 불규칙 활용</div>
            <div className="box">..</div>
            <div className="box">..</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SentencePage;
