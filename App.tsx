
import React, { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { GOALS_2026, REVENUE_PLAN } from './constants';
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
  Award,
  Search,
  CheckCircle2,
  PlayCircle
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
          <span className="text-[#00F2FF] font-black tracking-[1.5em] text-[12px] uppercase mb-12 opacity-80">2026 운영 전략 리포트</span>
          <h1 className="text-[6rem] md:text-[8rem] font-black mb-10 leading-[0.85] tracking-tighter text-white uppercase">
            OPERATIONAL<br/><span className="text-[#007AFF]">EXCELLENCE</span>
          </h1>
          <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent mb-16"></div>
          
          <div className="flex gap-12 md:gap-24 mb-16">
            <div className="text-center">
              <span className="block text-slate-500 text-xs font-bold tracking-widest uppercase mb-3">목표 매출액</span>
              <div className="text-5xl md:text-8xl font-black text-white">{GOALS_2026.REVENUE}<span className="text-2xl ml-1 text-[#007AFF]">억</span></div>
            </div>
            <div className="text-center">
              <span className="block text-slate-500 text-xs font-bold tracking-widest uppercase mb-3">목표 순이익</span>
              <div className="text-5xl md:text-8xl font-black text-[#00F2FF]">{GOALS_2026.PROFIT}<span className="text-2xl ml-1 text-[#00F2FF]">억</span></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-4xl leading-tight">
            더국제직업전문학교 첨단점 2026년 운영 계획<br/>
            <span className="text-white/60 font-bold mt-4 block text-base uppercase tracking-[0.3em]">수익성 강화와 교육 인프라의 혁신</span>
          </p>
        </div>
      </div>
    ),

    // 02. 매출 계획 상세
    () => (
      <Slide title="Sales Revenue Plan" subtitle="2026년 부문별 매출 목표 및 성장 지표" pageNumber={2}>
        <div className="mt-4 flex-1 overflow-hidden">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {REVENUE_PLAN.map((item, i) => (
              <div key={i} className="card-blur p-8 rounded-xl border-t border-white/10">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-2">{item.category}</span>
                <div className="text-4xl font-black text-white mb-2">{(item.rev2026/10000).toFixed(1)}억</div>
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>모집률 {item.rate}</span>
                  <span>{item.targetCount}명</span>
                </div>
              </div>
            ))}
          </div>
          <div className="card-blur p-10 rounded-2xl bg-[#007AFF]/5 border border-[#007AFF]/20 text-center">
            <h4 className="text-3xl font-black text-white mb-4">총 매출 목표: 22억 3,600만원</h4>
            <p className="text-xl text-slate-400 font-bold">2025년 실적(15.3억) 대비 <span className="text-[#00F2FF]">약 46% 성장</span> 지향</p>
          </div>
        </div>
      </Slide>
    ),

    // 03. 경쟁기관 분석 벤치마킹 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(1)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">01</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            MARKET<br/><span className="text-[#00F2FF] font-thin">BENCHMARK</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">경쟁기관 분석 및 실질적 개선 방안</p>
      </div>
    ),

    // 04. 경쟁기관 대응: 광산그린컴퓨터아트학원
    () => (
      <Slide title="Competitor Analysis 01" subtitle="광산그린컴퓨터아트학원 분석 및 대응" pageNumber={4}>
         <div className="mt-8 grid grid-cols-2 gap-12 flex-1 items-center">
            <div className="space-y-8">
               <div className="p-8 card-blur border-l-4 border-slate-700">
                  <span className="text-slate-500 font-black text-[12px] tracking-widest uppercase block mb-4">경쟁사 현황 (내용)</span>
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    • 밴드 운영: 교육내용 업로드 및 포트폴리오 공유<br/>
                    • 방문상담 시 취업처 리스트 및 포트폴리오 소개
                  </p>
               </div>
            </div>
            <div className="p-10 card-blur border-l-4 border-[#007AFF] bg-[#007AFF]/5">
               <span className="text-[#007AFF] font-black text-sm tracking-widest uppercase block mb-6">자사 개선방안</span>
               <p className="text-3xl font-black text-white leading-snug">
                 건축설계 / 디자인 운영 예정<br/>
                 장기과정 중심 상담 교육 강화
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 05. 경쟁기관 대응: 광주컴퓨터기술학원
    () => (
      <Slide title="Competitor Analysis 02" subtitle="광주컴퓨터기술학원 과정 운영 대응" pageNumber={5}>
         <div className="mt-8 grid grid-cols-2 gap-12 flex-1 items-center">
            <div className="space-y-8">
               <div className="p-8 card-blur border-l-4 border-slate-700">
                  <span className="text-slate-500 font-black text-[12px] tracking-widest uppercase block mb-4">경쟁사 현황 (내용)</span>
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    • 과정 운영: 정보처리 및 단기 실무 과정 중심 운영
                  </p>
               </div>
            </div>
            <div className="p-10 card-blur border-l-4 border-[#00F2FF] bg-[#00F2FF]/5">
               <span className="text-[#00F2FF] font-black text-sm tracking-widest uppercase block mb-6">자사 개선방안</span>
               <p className="text-3xl font-black text-white leading-snug">
                 수시 계좌제 과정 신청을 통한<br/>
                 모집 유연성 및 시장 점유율 확대
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 06. 경쟁기관 대응: 한울전산세무회계학원
    () => (
      <Slide title="Competitor Analysis 03" subtitle="한울전산세무회계학원 인프라 대응" pageNumber={6}>
         <div className="mt-8 grid grid-cols-2 gap-12 flex-1 items-center">
            <div className="space-y-8">
               <div className="p-8 card-blur border-l-4 border-slate-700">
                  <span className="text-slate-500 font-black text-[12px] tracking-widest uppercase block mb-4">경쟁사 현황 (내용)</span>
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    • 운영시설: 최근 리모델링 완료<br/>
                    • 수검장: 한국생산성본부 수검장 운영
                  </p>
               </div>
            </div>
            <div className="p-10 card-blur border-l-4 border-[#007AFF] bg-[#007AFF]/5">
               <span className="text-[#007AFF] font-black text-sm tracking-widest uppercase block mb-6">자사 개선방안</span>
               <p className="text-3xl font-black text-white leading-snug">
                 회계/사무 강의실 리모델링 및<br/>
                 한국세무사회 공식 수검장 운영
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 07. 운영인력 경쟁력 강화 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(2)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">02</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            ELITE<br/><span className="text-[#007AFF] font-thin">FACULTY</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">전문 강사 양성 및 행정 역량의 교과 융합</p>
      </div>
    ),

    // 08. 인력 강화: 강민기 선생님
    () => (
      <Slide title="Faculty Growth 01" subtitle="강민기 : 건축 전문 강사 양성 로드맵" pageNumber={8}>
         <div className="mt-12 flex flex-col justify-center h-full max-w-4xl">
            <div className="mb-10 border-b border-white/10 pb-8">
               <h4 className="text-7xl font-black text-white mb-2">강민기 <span className="font-thin text-slate-500">교사</span></h4>
               <p className="text-2xl font-bold text-[#007AFF] uppercase tracking-widest">건축 설계 교육의 차세대 리더</p>
            </div>
            <div className="bg-white/[0.02] p-12 card-blur rounded-xl border border-white/5 space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-4 h-4 rounded-full bg-[#007AFF]"></div>
                 <p className="text-2xl font-bold text-white">강기환 캐드선생님 수업 청강 후 현장 투입</p>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                 <p className="text-2xl font-bold text-slate-300">실무 중심 건축 자격 교육 정예화 진행</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 09. 인력 강화: 채수훈 선생님
    () => (
      <Slide title="Faculty Growth 02" subtitle="채수훈 : AI 특강 전문 강사 양성" pageNumber={9}>
         <div className="mt-12 flex flex-col justify-center h-full max-w-4xl">
            <div className="mb-10 border-b border-white/10 pb-8">
               <h4 className="text-7xl font-black text-white mb-2">채수훈 <span className="font-thin text-slate-500">교사</span></h4>
               <p className="text-2xl font-bold text-[#00F2FF] uppercase tracking-widest">생성형 AI 기술 교육의 프론티어</p>
            </div>
            <div className="bg-white/[0.02] p-12 card-blur rounded-xl border border-white/5 space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-4 h-4 rounded-full bg-[#00F2FF]"></div>
                 <p className="text-2xl font-bold text-white">유료 AI 전문 교육 과정 참여 중</p>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                 <p className="text-2xl font-bold text-slate-300">미드저니, 구글 AI 스튜디오 기반 특성화 수업 준비</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 10. 운영지원팀 역량 강화
    () => (
      <Slide title="Operation Team" subtitle="운영지원팀 4명의 NCS 확인강사 등록 및 수업 투입" pageNumber={10}>
         <div className="mt-6 grid grid-cols-2 gap-10 flex-1">
            <div className="card-blur p-12 border-t border-white/5 relative">
               <h5 className="text-2xl font-black text-slate-500 mb-6 tracking-widest uppercase">역량 확보</h5>
               <p className="text-2xl font-bold text-white leading-relaxed">
                 NCS 확인강사 신청 및 교강사 활용<br/>
                 1, 2월 핵심 직무 자격증 취득 완료
               </p>
            </div>
            <div className="card-blur p-12 border-t border-[#007AFF] bg-[#007AFF]/5 relative">
               <h5 className="text-2xl font-black text-[#007AFF] mb-6 tracking-widest uppercase">현장 투입</h5>
               <p className="text-2xl font-bold text-white leading-relaxed">
                 3월부터 정규 수업 전격 투입<br/>
                 행정 지원과 교육 실무의 원활한 융합
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 11. 첨단점 브랜드 설계 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(3)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">03</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            BRAND<br/><span className="text-[#00F2FF] font-thin">DESIGN</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">물류·건축 특성화 이미지 확산 및 홍보 최적화</p>
      </div>
    ),

    // 12. 브랜드 핵심 전략
    () => (
      <Slide title="Brand Identity" subtitle="첨단 국제하면 물류/건축 이미지가 떠오르도록 설계" pageNumber={12}>
         <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="relative mb-12">
               <div className="absolute inset-0 bg-[#007AFF]/20 blur-[120px]"></div>
               <h3 className="text-[6rem] md:text-[8rem] font-black text-white relative leading-none uppercase tracking-tighter">
                 <span className="text-[#00F2FF] font-bold block text-4xl tracking-[0.2em] mb-8">물류 · 건축 전문 교육</span>
                 GLOBAL<br/>
                 <span className="text-[#007AFF]">CENTER</span>
               </h3>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-3xl">
              <p className="text-2xl font-bold text-slate-300">
                2025년 수료생 기준 취업처 조사 (구글폼 활용) 실시<br/>
                조사 데이터를 기반으로 한 신뢰도 높은 홍보 콘텐츠 제작
              </p>
            </div>
         </div>
      </Slide>
    ),

    // 13. 디지털 평판 관리
    () => (
      <Slide title="Online Reputation" subtitle="네이버 및 카카오 채널을 통한 디지털 인지도 강화" pageNumber={13}>
         <div className="grid grid-cols-2 gap-10 mt-12 flex-1 items-center">
            <div className="p-16 card-blur text-center border-t border-white/5">
               <div className="flex justify-center mb-6"><Search className="text-[#007AFF]" size={48}/></div>
               <span className="text-[12px] font-black text-[#007AFF] tracking-[0.5em] uppercase block mb-6">Naver Marketing</span>
               <div className="text-7xl font-black text-white leading-none tracking-tighter">네이버 영수증 리뷰</div>
               <p className="text-xl font-bold text-slate-500 mt-8 uppercase tracking-widest">실제 방문자 기반의 신뢰도 확보</p>
            </div>
            <div className="p-16 card-blur text-center border-t border-white/5">
               <div className="flex justify-center mb-6"><Users className="text-[#00F2FF]" size={48}/></div>
               <span className="text-[12px] font-black text-[#00F2FF] tracking-[0.5em] uppercase block mb-6">Kakao Channel</span>
               <div className="text-9xl font-black text-[#00F2FF] tabular-nums leading-none tracking-tighter">3,000<span className="text-2xl text-slate-600 ml-2">명</span></div>
               <p className="text-xl font-bold text-slate-500 mt-8 uppercase tracking-widest">기존 홍보 분석 후 채널 확장 및 개선</p>
            </div>
         </div>
      </Slide>
    ),

    // 14. 일반고 특화 과정 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(4)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">04</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            ELITE<br/><span className="text-[#007AFF] font-thin">HIGH-SCHOOL</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">2027년 과정 승인 대비 일반고 정예화 운영</p>
      </div>
    ),

    // 15. 일반고 특화 과정 라인업
    () => (
      <Slide title="Specialized Curriculum" subtitle="전략적 학과 구성 및 담당 교사 배정" pageNumber={15}>
         <div className="mt-4 grid grid-cols-3 gap-8 flex-1">
            {[
               { s: "건축설계", t: "최규남", h: "20H", c: "전산응용건축제도 기능사 필기", icon: <Layers size={32}/> },
               { s: "멀티미디어", t: "강민기", h: "20H", c: "컴퓨터그래픽스 필기", icon: <Monitor size={32}/> },
               { s: "생산정보시스템", t: "염 숙", h: "30H", c: "전산회계 2급 필기", icon: <Briefcase size={32}/> }
            ].map((item, i) => (
               <div key={i} className="card-blur p-10 flex flex-col border-t-4 border-white/5 hover:border-[#007AFF] transition-all group rounded-xl">
                  <div className="text-[#007AFF] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h5 className="text-2xl font-black text-white mb-4 uppercase">{item.s}</h5>
                  
                  <div className="mb-8 p-6 bg-white/5 rounded-lg border border-white/5 min-h-[100px]">
                    <span className="text-[10px] text-[#007AFF] font-black tracking-widest uppercase block mb-2">필기 집중 교육</span>
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

    // 16. 온라인 콘텐츠 제작 및 활용 (핵심 수정 사항)
    () => (
      <Slide title="Digital Transformation" subtitle="자격증 취득률 향상을 위한 고품질 온라인 강의 제작" pageNumber={16}>
         <div className="mt-8 card-blur p-16 flex items-center space-x-20 rounded-2xl relative overflow-hidden h-full">
            <div className="w-48 h-48 bg-[#007AFF]/10 rounded-full flex items-center justify-center shrink-0 border border-[#007AFF]/30 relative">
               <PlayCircle size={100} className="text-[#007AFF] animate-pulse" />
               <div className="absolute -top-4 -right-4 bg-[#00F2FF] text-black font-black px-4 py-2 rounded-lg text-lg">2월 촬영</div>
            </div>
            <div className="space-y-10 relative z-10">
               <h4 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">전 과정 <span className="text-[#007AFF]">온라인 콘텐츠 사전 촬영</span> 및 활용</h4>
               <p className="text-2xl font-bold text-slate-500 leading-relaxed max-w-3xl">
                  2027년 과정 승인 대비 및 자격 취득률 극대화.<br/>
                  2월 중 집중 촬영을 완료하여 본 수업 및 복습용 교재로 전격 투입.
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 17. 품질 경영 및 점검 인트로
    () => (
      <div key={`slide-${currentSlide}`} className={`h-full w-full bg-[#000205] flex flex-col items-center justify-center p-12 ${getAnimClass(0)}`}>
        <div className="relative">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.03] tracking-tighter leading-none">05</span>
          <h2 className="text-[8rem] font-black text-white tracking-tighter leading-none text-center uppercase relative z-10">
            TOTAL<br/><span className="text-[#00F2FF] font-thin">QUALITY</span>
          </h2>
        </div>
        <p className="text-lg font-bold text-slate-500 tracking-[0.8em] uppercase mt-8">밀착 관리와 상시 점검을 통한 교육 품질 유지</p>
      </div>
    ),

    // 18. 전체 강의실 점검 시스템
    () => (
      <Slide title="Daily Monitoring" subtitle="매일 5분 동안의 집중 수업 참관 및 시설 점검" pageNumber={18}>
         <div className="mt-8 grid grid-cols-3 gap-10">
            {[
               { step: "강사 점검", desc: "강의 준비도 및 수업 진행 상황 실시간 모니터링", icon: <CheckCircle2 size={32} /> },
               { step: "강의실 점검", desc: "기자재 작동 여부 및 청결도 상시 유지 관리", icon: <Monitor size={32} /> },
               { step: "수강생 점검", desc: "학생 참여도 및 불편 사항 즉각 파악 및 해결", icon: <Users size={32} /> }
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

    // 19. 시간강사 운영 인력 점검
    () => (
      <Slide title="Faculty Management" subtitle="전문 시간강사의 정규직 전환 및 신규 채용 추진" pageNumber={19}>
         <div className="mt-8 card-blur p-12 flex flex-col justify-center h-full">
            <div className="space-y-12">
               <div className="flex items-start gap-8 border-b border-white/5 pb-10">
                  <div className="p-4 bg-white/5 rounded-xl"><CheckCircle2 className="text-[#00F2FF]"/></div>
                  <div>
                    <h5 className="text-3xl font-black text-white mb-2">2025 하반기 면담 완료</h5>
                    <p className="text-xl text-slate-500 font-bold">첨단점 소속 시간강사 개별 미팅 및 면담 진행 완료로 핵심 인력 확보</p>
                  </div>
               </div>
               <div className="flex items-start gap-8">
                  <div className="p-4 bg-[#007AFF]/10 rounded-xl"><Rocket className="text-[#007AFF]"/></div>
                  <div>
                    <h5 className="text-3xl font-black text-[#007AFF] mb-2">2026년 정규직 전환 및 신규 채용</h5>
                    <p className="text-xl text-slate-500 font-bold">우수 강사진의 정규직 전환을 통한 조직 안정성 강화 및 전문 분야 신규 채용 예정</p>
                  </div>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 20. 하이엔드 인프라 (원고 개선안 반영)
    () => (
      <Slide title="Infrastructure Innovation" subtitle="수강 만족도를 결정하는 최적의 학습 환경" pageNumber={20}>
         <div className="mt-8 card-blur p-16 flex items-center space-x-20 rounded-2xl relative overflow-hidden h-full">
            <div className="w-40 h-40 bg-[#007AFF]/10 rounded-full flex items-center justify-center shrink-0 border border-[#007AFF]/30">
               <Cpu size={80} className="text-[#007AFF] animate-pulse" />
            </div>
            <div className="space-y-10 relative z-10">
               <h4 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">회계/사무 강의실 <span className="text-[#007AFF]">프리미엄 리모델링</span></h4>
               <p className="text-2xl font-bold text-slate-500 leading-relaxed max-w-3xl">
                  고사양 PC 전면 교체 및 쾌적한 학습 공간 확보.<br/>
                  수강생 등록율을 높이는 결정적 차별화 요소로 작용.
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 21. 재무 목표 심화
    () => (
      <Slide title="Financial Growth" subtitle="매출 22.36억 달성을 위한 재무 로드맵" pageNumber={21}>
         <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl text-center">
               <span className="text-[14px] font-black text-slate-600 tracking-[1em] uppercase block mb-12">수익 모델 분석</span>
               <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#00F2FF]/10 blur-[140px]"></div>
                  <div className="text-[12rem] font-black text-white leading-none tabular-nums tracking-tighter relative z-10">
                    6<span className="text-4xl ml-4 text-[#00F2FF]">억</span>
                  </div>
               </div>
               <div className="mt-20 h-4 w-full bg-slate-900 rounded-full overflow-hidden flex shadow-inner border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#007AFF] to-[#00F2FF] w-[27%] shadow-[0_0_30px_rgba(0,122,255,0.5)]"></div>
               </div>
               <div className="mt-12 flex justify-between px-2">
                 <p className="text-xl font-black text-slate-600 uppercase">순이익 목표 설정</p>
                 <p className="text-xl font-black text-white uppercase">영업 이익 극대화를 위한 효율 경영</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 22. 상반기 마일스톤 (원고 일정 반영)
    () => (
      <Slide title="Phase 01" subtitle="상반기 핵심 실행 과제" pageNumber={22}>
         <div className="mt-8 space-y-8 flex-1 flex flex-col justify-center">
            {[
               { period: "1월 - 2월", task: "운영지원팀 자격증 취득 및 일반고 특화용 온라인 콘텐츠 사전 촬영 진행", color: "#007AFF" },
               { period: "3월 - 4월", task: "운영지원팀 4명 수업 전격 투입 및 일반고 특화 과정 운영 안정화", color: "#FFFFFF" },
               { period: "5월 - 6월", task: "수시 계좌제 과정 신청 및 전체 강의실 시설/수업 상시 점검 체계 강화", color: "#FFFFFF" }
            ].map((item, i) => (
               <div key={i} className="flex items-center space-x-16 card-blur p-10 rounded-xl border-l-8 transition-all hover:translate-x-4" style={{borderColor: item.color}}>
                  <span className="text-4xl font-black text-white/20 w-64 tabular-nums tracking-tighter">{item.period}</span>
                  <p className="text-2xl font-bold text-white leading-snug">{item.task}</p>
               </div>
            ))}
         </div>
      </Slide>
    ),

    // 23. 하반기 마일스톤
    () => (
      <Slide title="Phase 02" subtitle="하반기 성과 달성 및 차년도 준비" pageNumber={23}>
         <div className="mt-8 space-y-8 flex-1 flex flex-col justify-center">
            {[
               { period: "7월 - 9월", task: "2학기 방과후 계좌제반 운영 및 단기/외부사업 매출 목표 집중 달성", color: "#00F2FF" },
               { period: "10월 - 11월", task: "2027년 과정 승인 신청 대비 성과 지표(자격 취득률) 데이터 확보", color: "#FFFFFF" },
               { period: "12월", task: "2026년 경영 실적(22.36억) 검증 및 정규직 강사 신규 채용 마무리", color: "#FFFFFF" }
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
              <span className="text-[12rem] font-black text-white leading-none tracking-tighter group-hover:text-[#007AFF] transition-colors">22.36<span className="text-4xl font-light text-slate-700 ml-6">억</span></span>
              <p className="text-2xl font-black text-slate-600 mt-10 uppercase tracking-[0.5em]">목표 매출액</p>
           </div>
           <div className="text-center group">
              <span className="text-[12rem] font-black text-[#00F2FF] leading-none tracking-tighter">6<span className="text-4xl font-light text-slate-700 ml-6">억</span></span>
              <p className="text-2xl font-black text-slate-600 mt-10 uppercase tracking-[0.5em]">목표 순이익</p>
           </div>
        </div>
        <div className="mt-24 h-[1px] w-64 bg-slate-800"></div>
        <p className="text-3xl font-black text-white mt-12 tracking-tight uppercase">원칙을 지키는 관리, 성과로 증명하는 2026</p>
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
