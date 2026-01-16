import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageHeader from '../ui/MainPageHeader';
import Footer from '../sections/Footer';
import { IMAGES, getImageKeys, DEFAULT_IMAGES, refreshAssets } from '../../constants/assets';
import { 
  Upload, Save, RotateCcw, AlertCircle, Loader2, Database, CheckCircle, Info, Trash2, 
  LayoutGrid, Layers, Workflow, AppWindow, Copy, Download, RefreshCw, Eye, ExternalLink, FileText 
} from 'lucide-react';

// 상세 권장 규격 및 설명
const IMAGE_META: Record<string, { label: string, location: string, size: string, icon: any }> = {
  heroBackground: { label: "메인 히어로", location: "메인 > 최상단 배경", size: "1920 x 1080", icon: LayoutGrid },
  philosophy: { label: "메인 지역 섹션", location: "메인 > 지역기반 만남 섹션", size: "1000 x 1200", icon: AppWindow },
  systemFeatures: { label: "3가지 약속", location: "메인 > 하단 약속 섹션", size: "800 x 1200", icon: AppWindow },
  card1: { label: "철학 카드 01", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
  card2: { label: "철학 카드 02", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
  card3: { label: "철학 카드 03", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
  processStep1: { label: "신청서 작성", location: "진행방식 > 1단계", size: "1200 x 900", icon: Workflow },
  processStep2: { label: "2차 설문", location: "진행방식 > 2단계", size: "1200 x 900", icon: Workflow },
  processStep3: { label: "카톡 상담", location: "진행방식 > 3단계", size: "1200 x 900", icon: Workflow },
  processStep4: { label: "매칭/차단", location: "진행방식 > 4단계", size: "1200 x 900", icon: Workflow },
  processStep5: { label: "프로필 제공", location: "진행방식 > 5단계", size: "1200 x 900", icon: Workflow },
  processStep6: { label: "만남 확정", location: "진행방식 > 6단계", size: "1200 x 900", icon: Workflow },
  processStep7: { label: "피드백", location: "진행방식 > 7단계", size: "1200 x 900", icon: Workflow },
  footerTexture: { label: "푸터 배경", location: "모든 페이지 하단", size: "1920 x 1080", icon: LayoutGrid },
};

const GROUPS = [
  { id: 'main', title: '메인 페이지 섹션별 이미지', icon: LayoutGrid, keys: ['heroBackground', 'philosophy', 'systemFeatures', 'footerTexture'] },
  { id: 'cards', title: '핵심 가치 카드', icon: Layers, keys: ['card1', 'card2', 'card3'] },
  { id: 'process', title: '진행 방식 단계별', icon: Workflow, keys: ['processStep1', 'processStep2', 'processStep3', 'processStep4', 'processStep5', 'processStep6', 'processStep7'] },
];

const AdminMain: React.FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [storageUsage, setStorageUsage] = useState(0);
  const [backupString, setBackupString] = useState('');

  useEffect(() => {
    loadImages();
    checkStorageUsage();
  }, []);

  const loadImages = () => {
    refreshAssets(); 
    const keys = getImageKeys();
    const currentImages: Record<string, string> = {};
    keys.forEach(key => {
      currentImages[key] = IMAGES[key] || DEFAULT_IMAGES[key];
    });
    setImages(currentImages);
    
    // 백업 문자열 업데이트
    const stored = localStorage.getItem('EUM_CUSTOM_IMAGES');
    setBackupString(stored || '');
  };

  const checkStorageUsage = () => {
    try {
        const stored = localStorage.getItem('EUM_CUSTOM_IMAGES') || "";
        const total = (stored.length * 2) / 1024 / 1024; // MB
        setStorageUsage(total);
    } catch (e) {
        setStorageUsage(0);
    }
  };

  const handleSave = () => {
    setIsProcessing(true);
    setMessage(null);

    setTimeout(() => {
        try {
          const cleanImages: Record<string, string> = {};
          Object.keys(images).forEach(key => {
              const currentValue = images[key];
              const defaultValue = DEFAULT_IMAGES[key];
              if (currentValue && currentValue.trim() !== '' && currentValue !== defaultValue) {
                  cleanImages[key] = currentValue;
              }
          });

          const dataToSave = JSON.stringify(cleanImages);
          if (dataToSave.length > 4.7 * 1024 * 1024) { 
              throw new Error("QUOTA_NEARLY_FULL");
          }

          localStorage.setItem('EUM_CUSTOM_IMAGES', dataToSave);
          setBackupString(dataToSave);
          
          refreshAssets();
          checkStorageUsage();
          setMessage({ text: '브라우저 저장 완료!', type: 'success' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e: any) {
          setMessage({ text: '저장 실패. 이미지 용량을 줄여주세요.', type: 'error' });
        } finally {
          setIsProcessing(false);
        }
    }, 500);
  };

  const handleRestore = () => {
      if (!backupString.trim()) return;
      try {
          const parsed = JSON.parse(backupString);
          if (parsed && typeof parsed === 'object') {
              localStorage.setItem('EUM_CUSTOM_IMAGES', backupString);
              refreshAssets();
              loadImages();
              checkStorageUsage();
              setMessage({ text: '데이터 복구 완료!', type: 'success' });
          }
      } catch (e) {
          setMessage({ text: '잘못된 형식입니다.', type: 'error' });
      }
  };

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 1200;
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
      };
    });
  };

  const handleFileChange = async (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setIsProcessing(true);
        try {
            const compressed = await compressImage(file);
            setImages(prev => ({ ...prev, [key]: compressed }));
            setMessage({ text: '이미지 준비됨 (저장을 눌러주세요)', type: 'warning' });
        } catch (error) {
            setMessage({ text: '처리 실패', type: 'error' });
        } finally {
            setIsProcessing(false);
            e.target.value = '';
        }
    }
  };

  return (
    <div className="bg-eum-bg min-h-screen">
      <MainPageHeader title="이미지 관리자" subtitle="Admin Panel" />

      <div className="py-24 px-6 max-w-[1100px] mx-auto">
        
        {/* Quick Access Pages */}
        <div className="mb-12">
           <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-sm font-black text-gray-700 flex items-center gap-2 mb-6 uppercase tracking-widest">
                    <ExternalLink className="w-4 h-4 text-eum-accent" /> 운영 규정 관리
                </h3>
                <div className="flex flex-wrap gap-4">
                    <button 
                        onClick={() => navigate('/policy')}
                        className="flex items-center gap-3 px-6 py-4 bg-eum-dark text-white rounded-2xl hover:bg-black transition-all group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                            <FileText className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm">운영 규정 및 약관 페이지 보기</span>
                    </button>
                    <p className="w-full mt-4 text-xs text-gray-400 font-medium">
                      * 고객에게는 직접 노출되지 않습니다. 상담 시 링크를 복사해서 전달하세요.
                    </p>
                </div>
           </div>
        </div>

        {/* Storage & Backup */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-black text-gray-700 flex items-center gap-2">
                        <Database className="w-4 h-4 text-eum-accent" /> 저장소 상태
                    </span>
                    <span className="text-xs font-bold text-gray-400">{storageUsage.toFixed(2)}MB / 5MB</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-eum-dark transition-all duration-700" style={{ width: `${(storageUsage/5)*100}%` }}></div>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">코드를 수정하면 이 데이터가 사라질 수 있습니다. 중요한 이미지는 URL 주소를 복사해서 constants/assets.ts에 직접 기록하세요.</p>
            </div>

            <div className="bg-eum-dark p-8 rounded-[2rem] text-white shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                    <Download className="w-4 h-4 text-eum-accent" />
                    <span className="text-sm font-black uppercase tracking-widest">백업 및 복구 코드</span>
                </div>
                <textarea 
                    value={backupString}
                    onChange={(e) => setBackupString(e.target.value)}
                    placeholder="백업 코드를 여기에 보관하세요"
                    className="w-full h-12 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-mono outline-none mb-4 focus:border-eum-accent"
                />
                <div className="flex gap-2">
                    <button onClick={() => { navigator.clipboard.writeText(backupString); setMessage({ text: '복사 완료!', type: 'success' }); }} className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all">설정 복사</button>
                    <button onClick={handleRestore} className="flex-1 bg-eum-accent hover:bg-[#7d6f60] py-2 rounded-xl text-xs font-bold transition-all">복구하기</button>
                </div>
            </div>
        </div>

        {/* Groups */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-[100px] z-30 bg-eum-bg/80 backdrop-blur-md py-4 rounded-xl">
              <h2 className="text-2xl font-black text-eum-dark flex items-center gap-3">
                  <LayoutGrid className="w-6 h-6 text-eum-accent" /> 리소스 리스트
              </h2>
              <div className="flex gap-3">
                  <button onClick={() => { if(window.confirm('초기화하시겠습니까?')) { localStorage.removeItem('EUM_CUSTOM_IMAGES'); window.location.reload(); } }} className="px-6 py-3 border border-gray-200 bg-white text-gray-400 font-bold rounded-2xl hover:bg-gray-50 transition-all">초기화</button>
                  <button onClick={handleSave} disabled={isProcessing} className="px-10 py-3 bg-eum-dark text-white font-black rounded-2xl hover:bg-black transition-all">저장하기</button>
              </div>
          </div>

          {message && (
             <div className={`mb-10 p-5 rounded-2xl font-bold text-center border ${message.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>{message.text}</div>
          )}

          {GROUPS.map((group) => (
            <div key={group.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                  <div className="w-12 h-12 bg-eum-bg rounded-2xl flex items-center justify-center text-eum-accent"><group.icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-black text-eum-dark">{group.title}</h3>
               </div>

               <div className="space-y-12">
                  {group.keys.map((key) => {
                    const meta = IMAGE_META[key] || { label: key, location: "-", size: "-", icon: Info };
                    const isDefault = images[key] === DEFAULT_IMAGES[key];
                    const isDataUrl = images[key]?.startsWith('data:');

                    return (
                      <div key={key} className="grid lg:grid-cols-[200px_1fr_160px] gap-8 items-start">
                        <div className="space-y-2">
                            <label className="font-black text-eum-dark text-sm block">{meta.label}</label>
                            <div className="inline-block bg-eum-bg px-2 py-1 rounded text-[10px] font-black text-eum-accent border border-eum-accent/10 uppercase">{meta.size}</div>
                            <p className="text-[11px] text-gray-400 font-bold mt-2">위치: <span className="text-gray-500">{meta.location}</span></p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex gap-2">
                              {isDataUrl ? (
                                <div className="flex-1 p-3.5 border border-green-100 bg-green-50/30 rounded-2xl text-xs font-black text-green-700 flex items-center justify-between">
                                   <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 파일 업로드됨</span>
                                   <button onClick={() => setImages(prev => ({...prev, [key]: DEFAULT_IMAGES[key]}))} className="p-2 bg-white border border-red-100 text-red-400 rounded-xl hover:text-red-600 transition-all"><Trash2 className="w-4 h-4" /></button>
                                </div>
                              ) : (
                                <input type="text" value={images[key]} onChange={(e) => setImages(prev => ({ ...prev, [key]: e.target.value }))} placeholder="이미지 URL 주소" className="flex-1 p-3.5 border border-gray-100 bg-gray-50 rounded-2xl text-xs font-mono outline-none focus:border-eum-accent focus:bg-white transition-all shadow-inner" />
                              )}
                              <label className="cursor-pointer bg-white hover:bg-gray-900 hover:text-white text-gray-400 p-3.5 rounded-2xl border border-gray-100 shadow-sm transition-all flex items-center justify-center w-14 flex-shrink-0">
                                 <Upload className="w-6 h-6" /><input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(key, e)} />
                              </label>
                          </div>
                          <p className={`text-[10px] font-black uppercase px-1 tracking-widest ${isDefault ? 'text-gray-300' : 'text-eum-accent'}`}>{isDefault ? "Default" : "Customized"}</p>
                        </div>

                        <div className="h-32 w-full bg-gray-100 rounded-[1.5rem] overflow-hidden border border-gray-100">
                            <img src={images[key]} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0f0f0f] text-white"><Footer /></div>
    </div>
  );
};

export default AdminMain;