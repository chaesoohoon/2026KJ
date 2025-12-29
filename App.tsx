
import React, { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { GOALS_2026, MARKET_PERFORMANCE } from './constants';
import { 
  ChevronRight, 
  ChevronLeft, 
  Zap,
  Users,
  Monitor,
  Cpu,
  Layers,
  Video,
  ClipboardCheck,
  Rocket,
  TrendingUp,
  Target,
  Briefcase,
  BarChart3,
  Award
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 24));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const getAnimClass = (index: number) => {
    const anims = ['anim-blur-zoom', 'anim-slide-right', 'anim-slide-left', 'anim-slide-bottom', 'anim-split'];
    return anims[index % anims.length];
  };

  const slides = [
    // 01. 메인 히어로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full flex flex-col items-center justify-center text-center p-12 relative overflow-hidden ${getAnimClass(0)}`}>
        <div className="z-10 flex flex-col items-center">
          <span className="text-[#00F2FF] font-black tracking-[1.5em] text-[12px] uppercase mb-12 opacity-80">2026 전략 성장 로드맵</span>
          <h1 className="text-[6rem] md:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter text-white uppercase">
            REACHING<br/><span className="text-[#007AFF]">NEW PEAKS</span>
          </h1>
          <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent mb-16"></div>
          
          <div className="flex gap-12 md:gap-24 mb-16">
            <div className="text-center">
              <span className="block text-slate-500 text-xs font-bold tracking-widest uppercase mb-3">목표 매출</span>
              <div className="text-5xl md:text-8xl font-black text-white">{GOALS_2026.REVENUE}<span className="text-2xl ml-1 text-[#007AFF]">억</span></div>
            </div>
            <div className="text-center">
              <span className="block text-slate-500 text-xs font-bold tracking-widest uppercase mb-3">목표 순이익</span>
              <div className="text-5xl md:text-8xl font-black text-[#00F2FF]">{GOALS_2026.PROFIT}<span className="text-2xl ml-1 text-[#00F2FF]">억</span></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-4xl leading-tight">
            더국제직업전문학교 첨단점 2026 운영 전략 로드맵<br/>
            <span className="text-white/60 font-bold mt-4 block text-base uppercase tracking-[0.3em]">성과 중심의 조직 문화와 시장 지배력 강화</span>
          </p>
        </div>
      </div>
    ),

    // 02. 연간 경영 목표 요약
    () => (
      <Slide title="Financial Objectives" subtitle="2026년 수익성 극대화 및 모집 목표 달성" pageNumber={2}>
        <div className="flex-1 flex flex-col justify-center">
           <div className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
              {[
                { label: "총 매출 목표", value: GOALS_2026.REVENUE.toString(), unit: "억", sub: "통합 매출 시너지 창출", icon: <TrendingUp className="text-[#007AFF]"/> },
                { label: "순이익 목표", value: GOALS_2026.PROFIT.toString(), unit: "억", sub: "내실 경영 및 지출 최적화", icon: <Target className="text-[#00F2FF]"/> },
                { label: "총 모집 인원", value: GOALS_2026.TOTAL_STUDENTS.toLocaleString(), unit: "명", sub: "지역 최대 교육 인프라 가동", icon: <Users className="text-white"/> }
              ].map((item, i) => (
                <div key={i} className="card-blur p-12 border-t-4 border-transparent hover:border-[#007AFF] transition-all text-center">
                  <div className="flex justify-center mb-8 opacity-40">{item.icon}</div>
                  <span className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-4 block">{item.label}</span>
                  <div className="text-7xl font-black text-white mb-4 tabular-nums">
                    {item.value}<span className="text-2xl ml-1 text-slate-600">{item.unit}</span>
                  </div>
                  <p className="text-base font-bold text-slate-600">{item.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </Slide>
    ),

    // 03. 시장 분석: 경쟁사 비교
    () => (
      <Slide title="Market Positioning" subtitle="첨단·광산 지역 주요 교육기관 성과 비교" pageNumber={3}>
        <div className="mt-4 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-6">
            {MARKET_PERFORMANCE.map((comp, i) => (
              <div key={i} className={`card-blur p-6 flex items-center justify-between border-l-8 ${i === 0 ? 'border-[#007AFF] bg-[#007AFF]/5' : 'border-slate-800'}`}>
                <div className="flex items-center gap-8">
                  <span className="text-3xl font-black text-slate-600 w-12">{i + 1}</span>
                  <div>
                    <h5 className={`text-2xl font-black ${i === 0 ? 'text-white' : 'text-slate-400'}`}>{comp.name}</h5>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">{comp.mainField}</span>
                  </div>
                </div>
                <div className="flex gap-16 text-right">
                  <div>
                    <span className="block text-[10px] font-black text-slate-600 uppercase mb-1">모집 인원</span>
                    <span className={`text-3xl font-black ${i === 0 ? 'text-[#00F2FF]' : 'text-slate-400'}`}>{comp.recruitment2025.toLocaleString()}명</span>
                  </div>
                  <div className="w-48">
                    <span className="block text-[10px] font-black text-slate-600 uppercase mb-1">추정 매출</span>
                    <span className={`text-3xl font-black ${i === 0 ? 'text-white' : 'text-slate-400'}`}>{(comp.revenue2025 / 100000000).toFixed(2)}억</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white/[0.02] border border-white/5 rounded-xl text-center">
            <p className="text-xl font-bold text-slate-400">자사(국제첨단)가 매출 및 모집 인원 부문 <span className="text-[#007AFF] text-2xl font-black">압도적 1위</span> 시장 지배력 보유</p>
          </div>
        </div>
      </Slide>
    ),

    // 04. 매출 계획: 일반고 특화
    () => (
      <Slide title="Target Sector 01" subtitle="일반고 특화 과정: 미래 인재 선점 전략" pageNumber={4}>
         <div className="mt-8 card-blur p-12 border-l-8 border-[#007AFF] flex flex-col justify-between h-full relative overflow-hidden">
            <div className="flex justify-between items-start z-10">
               <div className="space-y-4">
                  <h4 className="text-5xl md:text-6xl font-black text-white tracking-tight">일반고 특화 과정</h4>
                  <p className="text-2xl text-slate-500 font-bold">2026년 정예 멤버 120명 모집 및 교육 품질 극대화</p>
               </div>
               <div className="text-right">
                  <span className="text-8xl md:text-9xl font-black text-white tabular-nums tracking-tighter">120<span className="text-3xl ml-2 text-[#007AFF]">명</span></span>
                  <p className="text-xs font-black text-slate-600 mt-4 uppercase tracking-widest">모집 목표</p>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10 z-10">
               <div><p className="text-slate-600 font-bold text-[11px] uppercase tracking-widest mb-2">핵심 목표</p><p className="text-4xl font-black text-white">필기 100% 합격</p></div>
               <div><p className="text-slate-600 font-bold text-[11px] uppercase tracking-widest mb-2">시장 점유</p><p className="text-4xl font-black text-[#00F2FF]">지역 점유율 1위</p></div>
               <div><p className="text-slate-600 font-bold text-[11px] uppercase tracking-widest mb-2">운영 전략</p><p className="text-4xl font-black text-white">밀착 상담 강화</p></div>
            </div>
         </div>
      </Slide>
    ),

    // 05. 매출 계획: 국기 및 단기
    () => (
      <Slide title="Target Sector 02" subtitle="국기·장기 및 단기·수탁 과정 운영 효율화" pageNumber={5}>
         <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="card-blur p-12 border-t border-white/5">
               <span className="text-[12px] font-black text-slate-600 tracking-widest uppercase mb-4 block">National Skill Training</span>
               <h5 className="text-3xl font-black text-white mb-6">국기/장기 과정</h5>
               <div className="text-7xl font-black text-white mb-4">96<span className="text-2xl ml-1 text-slate-600 font-medium">명</span></div>
               <p className="text-lg text-slate-500 font-bold italic-none">고단가 실무 과정 중심 편성</p>
            </div>
            <div className="card-blur p-12 border-t border-white/5">
               <span className="text-[12px] font-black text-slate-600 tracking-widest uppercase mb-4 block">Short-term & General</span>
               <h5 className="text-3xl font-black text-white mb-6">단기/일반 과정</h5>
               <div className="text-7xl font-black text-[#00F2FF]">1,240<span className="text-2xl ml-1 text-slate-600 font-medium">명</span></div>
               <p className="text-lg text-slate-500 font-bold italic-none">고속 운영 및 위탁 사업 확대</p>
            </div>
         </div>
      </Slide>
    ),

    // 06. 경쟁 우위 전략 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(1)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">01</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            STRATEGIC<br/><span className="text-[#00F2FF] font-thin">ADVANTAGE</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">독보적 경쟁 우위 및 시장 방어 체계</p>
      </div>
    ),

    // 07. 경쟁사 대응: 그린광산
    () => (
      <Slide title="Competitor Response" subtitle="그린광산 대비 커뮤니케이션 우위 선점" pageNumber={7}>
         <div className="mt-8 grid grid-cols-2 gap-12 flex-1 items-center">
            <div className="space-y-8">
               <span className="text-[#007AFF] font-black text-[12px] tracking-widest uppercase block mb-4">경쟁사 현황</span>
               <h4 className="text-5xl font-black text-white leading-tight">밴드 기반 밀착 케어 및<br/>포트폴리오 비주얼 강조</h4>
            </div>
            <div className="p-12 card-blur border-l-4 border-[#00F2FF] bg-white/[0.01]">
               <span className="text-[#00F2FF] font-black text-sm tracking-widest uppercase block mb-6">자사 대응 전략</span>
               <p className="text-3xl font-black text-white leading-snug">
                 AI 기반 학습 성취도 대시보드<br/>
                 상담 이력 관리 시스템 전격 도입
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 08. 경쟁사 대응: 한울전산 및 광주컴퓨터
    () => (
      <Slide title="Competitor Response" subtitle="시설 및 자격 수검 인프라 격차 확대" pageNumber={8}>
         <div className="mt-8 grid grid-cols-2 gap-12 flex-1 items-center">
            <div className="space-y-8">
               <span className="text-[#007AFF] font-black text-[12px] tracking-widest uppercase block mb-4">경쟁사 현황</span>
               <h4 className="text-5xl font-black text-white leading-tight">KPC 공인 수검장 활용 및<br/>시설 리모델링 완료</h4>
            </div>
            <div className="p-12 card-blur border-l-4 border-[#007AFF] bg-white/[0.01]">
               <span className="text-[#007AFF] font-black text-sm tracking-widest uppercase block mb-6">자사 대응 전략</span>
               <p className="text-3xl font-black text-white leading-snug">
                 세무사회 공식 수검장 독점 계약<br/>
                 고사양 PC 40대 전면 교체 완료
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 09. 인적 자원 전략 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(2)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">02</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            ELITE<br/><span className="text-[#007AFF] font-thin">FACULTY</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">교육의 핵심: 최정예 교강사 진 구축</p>
      </div>
    ),

    // 10. 교강사 육성: 강민기 교사
    () => (
      <Slide title="Faculty Excellence" subtitle="강민기 : 건축 실무 및 포트폴리오 고도화" pageNumber={10}>
         <div className="mt-12 flex flex-col justify-center h-full max-w-4xl">
            <div className="mb-10 border-b border-white/10 pb-8">
               <h4 className="text-7xl font-black text-white mb-2">강민기 <span className="font-thin text-slate-500">교사</span></h4>
               <p className="text-2xl font-bold text-[#007AFF] uppercase tracking-widest">건축 설계 포트폴리오 스페셜리스트</p>
            </div>
            <div className="bg-white/[0.02] p-12 card-blur rounded-xl border border-white/5">
               <p className="text-3xl font-medium text-slate-300 leading-relaxed">
                  수석교사 도제식 수업 참여를 통한<br/>
                  2026 상반기 건축 실기 현장 투입 정예화
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 11. 교강사 육성: 채수훈 교사
    () => (
      <Slide title="Faculty Excellence" subtitle="채수훈 : AI 융합 교육 및 마케팅 특성화" pageNumber={11}>
         <div className="mt-12 flex flex-col justify-center h-full max-w-4xl">
            <div className="mb-10 border-b border-white/10 pb-8">
               <h4 className="text-7xl font-black text-white mb-2">채수훈 <span className="font-thin text-slate-500">교사</span></h4>
               <p className="text-2xl font-bold text-[#00F2FF] uppercase tracking-widest">생성형 AI 교육 솔루션 리더</p>
            </div>
            <div className="bg-white/[0.02] p-12 card-blur rounded-xl border border-white/5">
               <p className="text-3xl font-medium text-slate-300 leading-relaxed">
                  AI 기반 교육 콘텐츠 제작 및 실무 적용<br/>
                  첨단점 독점 AI 마케팅 실무 과정 런칭
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 12. 운영지원팀 역량 강화
    () => (
      <Slide title="Support System" subtitle="행정 전문가의 교수 실무 융합 시스템" pageNumber={12}>
         <div className="mt-6 grid grid-cols-2 gap-10 flex-1">
            <div className="card-blur p-12 border-t border-white/5 relative">
               <h5 className="text-2xl font-black text-slate-500 mb-6 tracking-widest uppercase">역량 강화</h5>
               <p className="text-2xl font-bold text-white leading-relaxed">
                 운영진 전원 1인 1매 자격증 취득<br/>
                 NCS 강사 등록 100% 완료
               </p>
            </div>
            <div className="card-blur p-12 border-t border-[#007AFF] bg-[#007AFF]/5 relative">
               <h5 className="text-2xl font-black text-[#007AFF] mb-6 tracking-widest uppercase">실무 투입</h5>
               <p className="text-2xl font-bold text-white leading-relaxed">
                 행정 지원 정예화 및<br/>
                 3월 기초 전산 수업 전격 투입
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 13. 브랜드 가치 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(3)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">03</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            BRAND<br/><span className="text-[#00F2FF] font-thin">AUTHORITY</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">브랜드 신뢰도 및 시장 인지도 압도</p>
      </div>
    ),

    // 14. 브랜드 핵심 비전 (한글 강화)
    () => (
      <Slide title="Brand Vision" subtitle="물류·건축 특성화 No.1 브랜드 비전" pageNumber={14}>
         <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="relative">
               <div className="absolute inset-0 bg-[#007AFF]/20 blur-[120px]"></div>
               <h3 className="text-[7rem] md:text-[9rem] font-black text-white relative leading-none uppercase tracking-tighter">
                 <span className="text-slate-500 font-bold block text-4xl tracking-[0.2em] mb-8">특성화 교육의 중심</span>
                 SPECIALIST<br/>
                 <span className="text-[#007AFF]">CENTER</span>
               </h3>
               <p className="text-2xl md:text-3xl font-bold text-white/80 mt-12 tracking-tight">미래를 설계하는 실무 기술의 명가, 더국제</p>
            </div>
            <div className="mt-16 flex items-center space-x-12 opacity-80">
               <div className="flex flex-col items-center">
                 <Award size={40} className="text-[#00F2FF] mb-4"/>
                 <p className="text-sm font-bold text-slate-400 tracking-widest">신뢰받는 교육</p>
               </div>
               <div className="h-10 w-[1px] bg-white/20"></div>
               <div className="flex flex-col items-center">
                 <Target size={40} className="text-[#007AFF] mb-4"/>
                 <p className="text-sm font-bold text-slate-400 tracking-widest">정밀한 기술</p>
               </div>
               <div className="h-10 w-[1px] bg-white/20"></div>
               <div className="flex flex-col items-center">
                 <Zap size={40} className="text-[#00F2FF] mb-4"/>
                 <p className="text-sm font-bold text-slate-400 tracking-widest">혁신적 성장</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 15. 디지털 신뢰 지표
    () => (
      <Slide title="Digital Reputation" subtitle="수강생 신뢰를 증명하는 디지털 평판 데이터" pageNumber={15}>
         <div className="grid grid-cols-2 gap-10 mt-12 flex-1 items-center">
            <div className="p-16 card-blur text-center border-t border-white/5">
               <span className="text-[12px] font-black text-[#007AFF] tracking-[0.5em] uppercase block mb-6">Naver Review</span>
               <div className="text-9xl font-black text-white tabular-nums leading-none tracking-tighter">1,000<span className="text-2xl text-slate-600 ml-2">+</span></div>
               <p className="text-xl font-bold text-slate-500 mt-8 uppercase tracking-widest">방문자 인증 리뷰 돌파</p>
            </div>
            <div className="p-16 card-blur text-center border-t border-white/5">
               <span className="text-[12px] font-black text-[#00F2FF] tracking-[0.5em] uppercase block mb-6">Kakao Channel</span>
               <div className="text-9xl font-black text-[#00F2FF] tabular-nums leading-none tracking-tighter">3,000<span className="text-2xl text-slate-600 ml-2">+</span></div>
               <p className="text-xl font-bold text-slate-500 mt-8 uppercase tracking-widest">카카오 채널 구독 인원</p>
            </div>
         </div>
      </Slide>
    ),

    // 16. 고교 특화 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(4)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">04</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            ELITE<br/><span className="text-[#007AFF] font-thin">HIGH-SCHOOL</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">최정예 일반고 특화 교육: 120명의 미래 인재 육성</p>
      </div>
    ),

    // 17. 고교 특화 라인업
    () => (
      <Slide title="Specialized Curriculum" subtitle="전략적 모집과 자격 취득 중심의 교육 라인업" pageNumber={17}>
         <div className="mt-4 grid grid-cols-3 gap-8 flex-1">
            {[
               { s: "건축설계", t: "최규남", h: "20H", c: "건축제도 기능사", icon: <Layers size={32}/> },
               { s: "멀티미디어", t: "강민기", h: "20H", c: "컴퓨터그래픽스", icon: <Monitor size={32}/> },
               { s: "생산정보", t: "염 숙", h: "30H", c: "전산회계 2급", icon: <Briefcase size={32}/> }
            ].map((item, i) => (
               <div key={i} className="card-blur p-10 flex flex-col border-t-4 border-white/5 hover:border-[#007AFF] transition-all group rounded-xl">
                  <div className="text-[#007AFF] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h5 className="text-3xl font-black text-white mb-4 uppercase">{item.s}</h5>
                  
                  <div className="mb-8 p-6 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-[#007AFF] font-black tracking-widest uppercase block mb-2">취득 자격증</span>
                    <p className="text-lg text-white font-bold">{item.c}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                     <span className="text-white font-black text-2xl">{item.t} <span className="text-sm font-thin text-slate-500">교사</span></span>
                     <span className="text-[#00F2FF] font-black text-2xl">{item.h}</span>
                  </div>
               </div>
            ))}
         </div>
      </Slide>
    ),

    // 18. 디지털 교육 시스템 (LMS)
    () => (
      <Slide title="Digital Transformation" subtitle="필기 합격 보장 및 학습 자기주도성 강화" pageNumber={18}>
         <div className="mt-8 grid grid-cols-3 gap-10">
            {[
               { step: "기획", desc: "자격증 핵심 압축 이론 기획", icon: <ClipboardCheck size={32} /> },
               { step: "제작", desc: "마이크로 러닝 영상 상시 촬영", icon: <Video size={32} /> },
               { step: "배포", desc: "LMS 플랫폼 통한 상시 학습 제공", icon: <Rocket size={32} /> }
            ].map((item, i) => (
               <div key={i} className="flex flex-col items-center card-blur p-12 text-center border border-white/5">
                  <div className="w-20 h-20 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mb-8 text-[#007AFF]">
                     {item.icon}
                  </div>
                  <h6 className="text-2xl font-black text-white mb-4 uppercase">{item.step}</h6>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
               </div>
            ))}
         </div>
      </Slide>
    ),

    // 19. 품질 경영 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(0)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">05</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            TOTAL<br/><span className="text-[#00F2FF] font-thin">QUALITY</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">통합 품질 관리: 교육 디테일의 완벽함 추구</p>
      </div>
    ),

    // 20. 하이엔드 인프라
    () => (
      <Slide title="Infrastructure" subtitle="압도적 학습 환경을 통한 수강 만족도 제고" pageNumber={20}>
         <div className="mt-8 card-blur p-16 flex items-center space-x-20 rounded-2xl relative overflow-hidden h-full">
            <div className="w-40 h-40 bg-[#007AFF]/10 rounded-full flex items-center justify-center shrink-0 border border-[#007AFF]/30">
               <Cpu size={80} className="text-[#007AFF] animate-pulse" />
            </div>
            <div className="space-y-10 relative z-10">
               <h4 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">전용 강의실 프리미엄 리모델링 및<br/><span className="text-[#007AFF]">고사양 PC 40대 전면 교체</span></h4>
               <p className="text-2xl font-bold text-slate-500 leading-relaxed max-w-3xl">
                  수강생의 등록 결정적 요인인 교육 환경 혁신.<br/>
                  광산 지역 경쟁사 대비 인프라 우위 2년 이상 선점.
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 21. 재무 목표 심화
    () => (
      <Slide title="Financial Growth" subtitle="매출 22.3억 달성을 위한 재무 로드맵" pageNumber={21}>
         <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl text-center">
               <span className="text-[14px] font-black text-slate-600 tracking-[1em] uppercase block mb-12">예상 순이익 분석</span>
               <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#00F2FF]/10 blur-[140px]"></div>
                  <div className="text-[12rem] font-black text-white leading-none tabular-nums tracking-tighter relative z-10">
                    {GOALS_2026.PROFIT}<span className="text-4xl ml-4 text-[#00F2FF]">억</span>
                  </div>
               </div>
               <div className="mt-20 h-4 w-full bg-slate-900 rounded-full overflow-hidden flex shadow-inner border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#007AFF] to-[#00F2FF] w-[30%] shadow-[0_0_30px_rgba(0,122,255,0.5)]"></div>
               </div>
               <div className="mt-12 flex justify-between px-2">
                 <p className="text-xl font-black text-slate-600 uppercase">목표 영업 이익률: 30%</p>
                 <p className="text-xl font-black text-white uppercase">지속 가능한 성장 수익 모델</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 22. 상반기 실행 과제
    () => (
      <Slide title="Phase 01" subtitle="상반기 핵심 마일스톤: 인프라 및 기반 구축" pageNumber={22}>
         <div className="mt-8 space-y-8 flex-1 flex flex-col justify-center">
            {[
               { period: "1월 - 2월", task: "강의실 프리미엄 리모델링 및 필기 합격 보장 콘텐츠 제작 완료", color: "#007AFF" },
               { period: "3월 - 4월", task: "운영지원팀 교과 실무 투입 및 일반고 특화(120명) 운영 안정화", color: "#FFFFFF" },
               { period: "5월 - 6월", task: "방문자 리뷰 500건 추가 달성 및 상반기 운영 실적 분석", color: "#FFFFFF" }
            ].map((item, i) => (
               <div key={i} className="flex items-center space-x-16 card-blur p-10 rounded-xl border-l-8 transition-all hover:translate-x-4" style={{borderColor: item.color}}>
                  <span className="text-4xl font-black text-white/20 w-64 tabular-nums tracking-tighter">{item.period}</span>
                  <p className="text-2xl font-bold text-white leading-snug">{item.task}</p>
               </div>
            ))}
         </div>
      </Slide>
    ),

    // 23. 하반기 실행 과제
    () => (
      <Slide title="Phase 02" subtitle="하반기 핵심 마일스톤: 수익 극대화 및 차기 년도 준비" pageNumber={23}>
         <div className="mt-8 space-y-8 flex-1 flex flex-col justify-center">
            {[
               { period: "7월 - 9월", task: "여름 단기 과정 모집 극대화 및 지역 취업처 연계 고도화", color: "#00F2FF" },
               { period: "10월 - 11월", task: "2027년 과정 승인용 성과 데이터베이스 구축 및 사업 신청", color: "#FFFFFF" },
               { period: "12월", task: "연간 매출 22.3억 달성 검증 및 전사적 경영 성과 공유", color: "#FFFFFF" }
            ].map((item, i) => (
               <div key={i} className="flex items-center space-x-16 card-blur p-10 rounded-xl border-l-8 transition-all hover:translate-x-4" style={{borderColor: item.color}}>
                  <span className="text-4xl font-black text-white/20 w-64 tabular-nums tracking-tighter">{item.period}</span>
                  <p className="text-2xl font-bold text-white leading-snug">{item.task}</p>
               </div>
            ))}
         </div>
      </Slide>
    ),

    // 24. 대시보드 요약
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(1)}`}>
        <div className="flex flex-col md:flex-row items-baseline gap-20">
           <div className="text-center group">
              <span className="text-[12rem] font-black text-white leading-none tracking-tighter group-hover:text-[#007AFF] transition-colors">{GOALS_2026.REVENUE}<span className="text-4xl font-light text-slate-700 ml-6">억</span></span>
              <p className="text-2xl font-black text-slate-600 mt-10 uppercase tracking-[0.5em]">목표 매출액</p>
           </div>
           <div className="text-center group">
              <span className="text-[12rem] font-black text-[#00F2FF] leading-none tracking-tighter">{GOALS_2026.PROFIT}<span className="text-4xl font-light text-slate-700 ml-6">억</span></span>
              <p className="text-2xl font-black text-slate-600 mt-10 uppercase tracking-[0.5em]">목표 순이익</p>
           </div>
        </div>
        <div className="mt-24 h-[1px] w-64 bg-slate-800"></div>
        <p className="text-3xl font-black text-white mt-12 tracking-tight uppercase">압도적 성과를 향한 정밀한 실행</p>
      </div>
    ),

    // 25. 클로징
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full flex flex-col items-center justify-center text-center p-12 relative overflow-hidden bg-[#000205] ${getAnimClass(0)}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#007AFF]/10 via-transparent to-transparent"></div>
        <div className="mb-20">
           <Zap size={100} className="text-[#00F2FF] mx-auto shadow-lg animate-pulse" />
        </div>
        <h2 className="text-[9rem] font-black text-white mb-10 tracking-tighter leading-none uppercase italic">
          PRECISION<br/><span className="text-[#007AFF]">EXECUTION</span>
        </h2>
        <div className="h-[2px] w-48 bg-slate-800 mb-16 mx-auto"></div>
        <div className="flex gap-12 text-slate-500 text-[14px] font-black tracking-[0.6em] uppercase">
           <span>더국제직업전문학교 첨단점</span>
           <span>2026 운영 전략 보고</span>
        </div>
      </div>
    )
  ];

  return (
    <div className="w-full h-full bg-[#000205] overflow-hidden relative selection:bg-[#007AFF]/30">
      {slides[currentSlide]()}
      
      <div className="absolute bottom-10 right-10 flex space-x-6 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-white transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-[#007AFF] hover:border-[#007AFF] active:scale-90 shadow-xl'}`}
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === 24}
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-white transition-all ${currentSlide === 24 ? 'opacity-0 pointer-events-none' : 'hover:bg-[#007AFF] hover:border-[#007AFF] active:scale-90 shadow-xl'}`}
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      <div className="absolute top-10 left-10 right-10 z-50 h-[3px] bg-white/5 overflow-hidden flex rounded-full">
         {Array.from({length: 25}).map((_, i) => (
           <div 
             key={i} 
             className={`flex-1 h-full transition-all duration-700 ${i <= currentSlide ? (i === currentSlide ? 'bg-[#00F2FF] shadow-[0_0_20px_#00F2FF]' : 'bg-[#007AFF]/50') : 'bg-transparent'}`}
           />
         ))}
      </div>
    </div>
  );
};

export default App;
