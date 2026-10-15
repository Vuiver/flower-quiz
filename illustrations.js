// Original minimal flat illustrations: big organic shapes, thin ink line, grain, quiet palette.
const ART={ink:'#0b1d3a',bg:'#3a63ad',cream:'#f4e7d4',pale:'#bcd2ee',corn:'#6f9af0',dg:'#10594a',g:'#2e9a68',blush:'#f4b4c4',pink:'#ec7fa6',hot:'#e63b82',org:'#f4963a',yel:'#f5d04b',red:'#de4b3a',lil:'#b9a6ea'};
const SW=1.3;let _artId=0;
const _f=n=>Number(n).toFixed(1);
const _uni=(inner,fill)=>`<g fill="${ART.ink}" stroke="${ART.ink}" stroke-width="${SW*2.1}" stroke-linejoin="round">${inner}</g><g fill="${fill}" stroke="none">${inner}</g>`;
const _ring=(n,rad,start=-90)=>Array.from({length:n},(_,i)=>{const a=(start+i*360/n)*Math.PI/180;return [rad*Math.cos(a),rad*Math.sin(a)];});
const _circ=(pts,r)=>pts.map(p=>`<circle cx="${_f(p[0])}" cy="${_f(p[1])}" r="${r}"/>`).join('');
const _spark=(x,y,s=1)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0-12 2.4-2.4 12 0 2.4 2.4 0 12-2.4 2.4-12 0-2.4-2.4Z" fill="${ART.cream}" stroke="none" opacity=".9"/>`;
const _heart=(x,y,s,fill)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 14C-26-2-14-20 0-8 14-20 26-2 0 14Z" fill="${fill}"/>`;
const _bubble=(x,y,w,h,fill,right)=>{const t=right?x+w-34:x+16;return `<path d="M${x+12} ${y}h${w-24}q12 0 12 12v${h-24}q0 12-12 12H${t+18}l-12 14 -2-14H${x+12}q-12 0-12-12V${y+12}q0-12 12-12Z" fill="${fill}"/>`;};

// big leaf with veins; points right at ang=0
const _leaf=(x,y,len,ang,fill)=>{const L=len;let v='';for(let i=1;i<=3;i++){const t=.2+i*.19;v+=`M${_f(L*t)} 0l${_f(L*.14)} ${_f(-L*.2)}M${_f(L*t)} 0l${_f(L*.14)} ${_f(L*.12)}`;}
 return `<g transform="translate(${x} ${y}) rotate(${ang})"><path d="M0 0C${_f(L*.2)} ${_f(-L*.46)} ${_f(L*.78)} ${_f(-L*.42)} ${L} 0C${_f(L*.8)} ${_f(L*.26)} ${_f(L*.22)} ${_f(L*.3)} 0 0Z" fill="${fill}"/><path d="M${_f(L*.06)} 0H${_f(L*.84)}${v}" fill="none" stroke-width="${SW*.8}" opacity=".7"/></g>`;};

function _pot(type,w,h,fill,band){
 const L=-w/2,R=w/2;
 if(type==='bowl')return `<path d="M${L} 0H${R}C${R} ${h*1.15} ${L} ${h*1.15} ${L} 0Z" fill="${fill}"/><path d="M${L+4} ${h*.3}Q0 ${h*.62} ${R-4} ${h*.3}" fill="none" stroke="${band}" stroke-width="${w*.07}"/><rect x="${L-5}" y="-9" width="${w+10}" height="13" rx="6.5" fill="${band}"/>`;
 if(type==='tall'){const hh=h*1.25,ww=w*.78;return `<path d="M${-ww/2} 0H${ww/2}V${hh-10}q0 10-10 10H${-ww/2+10}q-10 0-10-10Z" fill="${fill}"/><path d="M${-ww/2} ${hh*.58}H${ww/2}V${hh-10}q0 10-10 10H${-ww/2+10}q-10 0-10-10Z" fill="${band}"/><rect x="${-ww/2-5}" y="-9" width="${ww+10}" height="14" rx="7" fill="${band}"/>`;}
 if(type==='cup')return `<path d="M${L-4} 0H${R+4}L${R-8} ${h}Q${R-9} ${h+8} ${R-18} ${h+8}H${L+18}Q${L+9} ${h+8} ${L+8} ${h}Z" fill="${fill}"/><path d="M${L-4} 0H${R+4}L${R+2} ${h*.3}H${L-2}Z" fill="${band}"/>`;
 // wavy
 const n=3,amp=w*.05,steps=26,cut=.62;const l=[],r=[];for(let i=0;i<=steps;i++){const t=i/steps,y=t*h,o=amp*Math.sin(t*n*2*Math.PI);l.push([L+o,y]);r.push([R-o,y]);}
 const poly=(ls,rs)=>'M'+ls.concat(rs.slice().reverse()).map(p=>_f(p[0])+' '+_f(p[1])).join('L')+'Z';
 const up=i=>i/steps<=cut;const lu=l.filter((p,i)=>up(i)),ru=r.filter((p,i)=>up(i)),ld=l.filter((p,i)=>!up(i)),rd=r.filter((p,i)=>!up(i));
 return `<path d="${poly(lu,ru)}" fill="${fill}"/><path d="${poly(ld,rd)}" fill="${band}"/><rect x="${L-4}" y="-8" width="${w+8}" height="12" rx="6" fill="${band}"/>`;
}

const HEAD={
 atiso:()=>{const sc=(x,y,k,f)=>`<path transform="translate(${x} ${y}) scale(${k})" d="M0 0C-19-7-22-32 0-48C22-32 19-7 0 0Z" fill="${f}"/>`;
  return sc(0,-6,.95,'#7a58c6')+[-22,0,22].map((x,i)=>sc(x,14,1.1,i===1?ART.g:ART.dg)).join('')+[-34,-12,12,34].map((x,i)=>sc(x,38,1.15,i%2?ART.dg:ART.g)).join('');},
 orchid:()=>{const bl=(x,y,k,r)=>`<g transform="translate(${x} ${y}) rotate(${r}) scale(${k})">${_uni(`<circle cx="-15" cy="2" r="17"/><circle cx="15" cy="2" r="17"/><ellipse cy="-20" rx="10" ry="19"/>`,ART.cream)}<ellipse cy="12" rx="9" ry="12" fill="${ART.pink}"/></g>`;
  return `<path d="M0 66C-6 30-30 30-36 14M0 66C4 30 24 22 30 -8M0 66C-4 20 -8 -12 -4 -42" fill="none" stroke="${ART.dg}" stroke-width="3"/>`+bl(-36,12,.8,-18)+bl(30,-10,.9,16)+bl(-4,-42,.75,-4);},
 chrys:()=>{let a='',b='';for(let i=0;i<12;i++)a+=`<ellipse cx="0" cy="-32" rx="10.5" ry="24" transform="rotate(${i*30})"/>`;for(let i=0;i<8;i++)b+=`<ellipse cx="0" cy="-17" rx="7" ry="13" transform="rotate(${i*45+22})"/>`;return _uni(a,ART.yel)+_uni(b,ART.org)+`<circle r="8" fill="${ART.red}"/>`;},
 pom:()=>{const dots=_ring(14,45);return `<circle r="37" fill="${ART.lil}"/>`+_ring(14,37).map((p,i)=>`<path d="M${_f(p[0]*.34)} ${_f(p[1]*.34)}L${_f(p[0])} ${_f(p[1])}" fill="none" stroke-width="${SW*.9}"/>`).join('')+dots.map(p=>`<circle cx="${_f(p[0])}" cy="${_f(p[1])}" r="4" fill="${ART.cream}"/>`).join('')+`<circle r="9" fill="${ART.cream}"/>`;},
 poppy:()=>_uni(_circ(_ring(3,19),29),ART.red)+_uni(_circ(_ring(3,15,-30),17),'#e9705a')+`<circle r="11" fill="${ART.ink}"/>`+_ring(7,8).map(p=>`<circle cx="${_f(p[0])}" cy="${_f(p[1])}" r="1.9" fill="${ART.cream}" stroke="none"/>`).join(''),
 phal:()=>_uni(`<ellipse cy="-30" rx="16" ry="28"/><circle cx="-30" cy="-2" r="26"/><circle cx="30" cy="-2" r="26"/><ellipse cx="-18" cy="32" rx="13" ry="24" transform="rotate(28 -18 32)"/><ellipse cx="18" cy="32" rx="13" ry="24" transform="rotate(-28 18 32)"/>`,ART.pink)+`<ellipse cy="12" rx="11" ry="14" fill="${ART.yel}"/><circle cy="4" r="4.5" fill="${ART.hot}"/>`,
 calla:()=>`<path d="M0 54C-38 34-42 -14-24 -50C-10 -36 14 -38 28 -54C40 -16 34 32 0 54Z" fill="${ART.cream}"/><path d="M-24 -50C-16 -24-4 -4 12 6" fill="none"/><rect x="-6" y="-32" width="13" height="44" rx="6.5" transform="rotate(10)" fill="${ART.yel}"/>`,
 anth:()=>`<path d="M0 50C-58 10-54 -40-20 -42C-6 -42 0 -30 0 -26C0 -30 6 -42 20 -42C54 -40 58 10 0 50Z" fill="${ART.hot}"/><path d="M-34 -20q-6 14 4 28" fill="none" stroke="${ART.blush}" stroke-width="4.4" stroke-linecap="round"/><path d="M0 8C4 -12 18 -30 30 -54" fill="none" stroke="${ART.ink}" stroke-width="14.5" stroke-linecap="round"/><path d="M0 8C4 -12 18 -30 30 -54" fill="none" stroke="${ART.cream}" stroke-width="11" stroke-linecap="round"/>`,
 lily:()=>{const pet=(a,l,w)=>`<path transform="rotate(${a})" d="M0 0C${-w} ${-l*.35} ${-w*.7} ${-l*.8} 0 ${-l}C${w*.7} ${-l*.8} ${w} ${-l*.35} 0 0Z"/>`;let back='',front='';for(let i=0;i<3;i++){back+=pet(60+i*120,62,17);front+=pet(i*120,66,20);}
  return _uni(back,ART.yel)+_uni(front,ART.org)+[0,120,240].map(a=>`<path transform="rotate(${a})" d="M0 -8V-50" fill="none" stroke-width="${SW*.8}" opacity=".6"/>`).join('')+[-40,10,60].map(a=>`<g transform="rotate(${a})"><path d="M0 0V-26" fill="none"/><ellipse cy="-30" rx="3.2" ry="6.5" fill="${ART.red}"/></g>`).join('');},
 hydr:()=>{const bl=[[-26,10,ART.corn,30],[22,14,ART.pale,28],[-6,-14,ART.lil,32],[26,-18,ART.corn,22],[-34,-16,ART.pale,20]];const cross=(x,y,c)=>`<g transform="translate(${x} ${y})" fill="${c}" stroke-width="${SW*.8}">${_circ([[-4,0],[4,0],[0,-4],[0,4]],3.8)}</g>`;
  return bl.map(([x,y,c,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('')+[[-20,6],[-2,-20],[18,10],[28,-14],[-34,-16],[6,24],[-12,26]].map(([x,y],i)=>cross(x,y,i%2?ART.cream:ART.blush)).join('');},
 bird:()=>{const sp=(a,l,fill)=>`<path transform="rotate(${a})" d="M0 0C-12-18-9-50 0-${l}C9-50 12-18 0 0Z" fill="${fill}"/>`;
  return `<g transform="translate(-18 4)">`+sp(-52,78,ART.org)+sp(-26,92,ART.org)+sp(0,98,ART.org)+sp(24,84,ART.org)+sp(50,64,ART.corn)+`</g><g transform="rotate(-16)"><path d="M-48 18C-34 -14 18 -20 62 4C34 8 12 34-48 18Z" fill="${ART.g}"/><path d="M-42 20C-14 30 28 22 56 7" fill="none" stroke="${ART.red}" stroke-width="3.4"/><circle cx="30" cy="2" r="2.6" fill="${ART.ink}" stroke="none"/></g>`;},
 rose:()=>_uni(_circ(_ring(8,31),15),ART.pink)+`<circle r="30" fill="${ART.pink}"/><circle r="19" fill="${ART.blush}"/><path d="M0 0c5-3 9 1 7 5c-3 6-12 5-14-2c-2-9 8-15 16-11c10 5 8 19-1 23" fill="none" stroke-width="1.7"/><path d="M-30 -10q10 -5 18 -1M26 -6q-4 12-14 14" fill="none" stroke-width="1.3" opacity=".6"/>`
};

// per-species composition
const SPEC={
 'artiso':{h:'atiso',s:1.05,lean:-8,pot:'tall',pc:ART.pale,bc:ART.cream,L:[[-4,-26,92,-160,ART.dg],[6,-20,76,-24,ART.g]],F:[[-30,-4,56,-170,ART.g]]},
 'dia-lan':{h:'orchid',s:1.2,lean:10,pot:'cup',pc:ART.cream,bc:ART.lil,L:[[0,-14,96,-158,ART.dg],[4,-14,100,-24,ART.g]],F:[]},
 'cuc-dai-doa':{h:'chrys',s:1.15,lean:14,pot:'wavy',pc:ART.cream,bc:ART.org,L:[[-4,-30,96,-158,ART.dg]],F:[[26,-6,58,-18,ART.g]]},
 'allium':{h:'pom',s:1.1,lean:-12,pot:'tall',pc:ART.cream,bc:ART.lil,L:[[-4,-8,100,-156,ART.dg],[6,-8,100,-26,ART.g]],F:[]},
 'anh-tuc':{h:'poppy',s:1.12,lean:12,pot:'bowl',pc:ART.cream,bc:ART.red,L:[[-6,-26,90,-154,ART.dg],[6,-18,74,-22,ART.g]],F:[]},
 'lan':{h:'phal',s:1.05,lean:-10,pot:'cup',pc:ART.blush,bc:ART.cream,L:[[-4,-8,80,-168,ART.dg]],F:[[22,-2,60,-20,ART.g]]},
 'calla-lily':{h:'calla',s:1.1,lean:8,pot:'wavy',pc:ART.cream,bc:ART.corn,L:[[-4,-10,98,-150,ART.dg],[6,-10,96,-28,ART.g]],F:[]},
 'hong-mon':{h:'anth',s:1.05,lean:-8,pot:'bowl',pc:ART.cream,bc:ART.hot,L:[[-6,-20,86,-160,ART.dg]],F:[[24,-4,62,-12,ART.g]]},
 'lily':{h:'lily',s:1.05,lean:10,pot:'tall',pc:ART.pale,bc:ART.yel,L:[[-4,-6,100,-154,ART.dg],[6,-6,100,-28,ART.g]],F:[]},
 'cam-tu-cau':{h:'hydr',s:1.15,lean:-8,pot:'wavy',pc:ART.cream,bc:ART.corn,L:[[-6,-26,88,-160,ART.dg],[6,-22,80,-22,ART.g]],F:[]},
 'thien-dieu':{h:'bird',s:.95,lean:6,pot:'cup',pc:ART.cream,bc:ART.g,L:[[-4,-8,104,-156,ART.dg],[6,-8,100,-26,ART.g]],F:[]},
 'hoa-hong':{h:'rose',s:1.1,lean:12,pot:'bowl',pc:ART.cream,bc:ART.pink,L:[[-6,-26,88,-156,ART.dg],[6,-20,78,-24,ART.g]],F:[[-30,-2,54,-168,ART.g]]}
};

function _plant(x,top,k,id){
 const s=SPEC[id]||SPEC['cuc-dai-doa'],sw=_f(SW/k);
 const stem=`M0 8C${-s.lean*.3} -40 ${s.lean*.6} -80 ${s.lean} -112`;
 return `<g transform="translate(${x} ${top}) scale(${k})" stroke-width="${sw}">${s.L.map(l=>_leaf(l[0],l[1],l[2],l[3],l[4])).join('')}<path d="${stem}" fill="none" stroke="${ART.ink}" stroke-width="${7.4}" stroke-linecap="round"/><path d="${stem}" fill="none" stroke="${ART.dg}" stroke-width="${4.4}" stroke-linecap="round"/><g transform="translate(${s.lean} -112) scale(${s.s})">${HEAD[s.h]()}</g>${_pot(s.pot,86,62,s.pc,s.bc)}${s.F.map(l=>_leaf(l[0],l[1],l[2],l[3],l[4])).join('')}</g>`;
}

function _frame(inner,w,h,label,cls){
 const uid='g'+(++_artId);
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}" class="${cls}"><defs><filter id="${uid}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" result="n"/><feColorMatrix in="n" values="0 0 0 0 .04  0 0 0 0 .1  0 0 0 0 .24  0 0 0 .3 0"/></filter></defs><rect width="${w}" height="${h}" rx="${w*.07}" fill="${ART.bg}"/><g stroke="${ART.ink}" stroke-width="${SW}" stroke-linecap="round" stroke-linejoin="round">${inner}</g><rect width="${w}" height="${h}" rx="${w*.07}" filter="url(#${uid})" opacity=".55" style="pointer-events:none"/></svg>`;
}

function flowerArt(id,name){
 return _frame(_spark(54,62,.9)+_spark(344,330,.7)+`<circle cx="338" cy="60" r="8" fill="${ART.cream}" stroke="none"/>`+_plant(196,278,1.32,id),400,400,'Tranh minh hoạ bông '+(name||''),'flower-art');
}

function cuteScene(index){
 const P=(x,y,k,id)=>_plant(x,y,k,id);
 const sc=[
  // 1 chọn chỗ đi chơi
  `${P(96,170,.58,'cuc-dai-doa')}${P(268,170,.58,'calla-lily')}<g transform="translate(182 16) scale(.82)"><path d="M0 6c-16 0-26 11-26 25 0 18 26 40 26 40s26-22 26-40c0-14-10-25-26-25Z" fill="${ART.red}"/><circle cy="30" r="9" fill="${ART.cream}"/></g>${_spark(54,44,.8)}`,
  // 2 cuối tuần
  `${P(104,170,.64,'lily')}<path d="M196 92h74v54q0 22-22 22h-30q-22 0-22-22Z" fill="${ART.cream}"/><path d="M270 106q26 0 20 22t-24 16" fill="none" stroke-width="5"/><path d="M270 106q26 0 20 22t-24 16" fill="none" stroke="${ART.cream}" stroke-width="2.6"/><path d="M218 78q-9-14 0-26m22 26q-9-14 0-26" fill="none"/>${_spark(310,60,.7)}`,
  // 3 làm nhóm
  `${P(236,150,.6,'allium')}<rect x="66" y="82" width="150" height="92" rx="12" fill="${ART.pale}"/><rect x="78" y="94" width="126" height="68" rx="5" fill="${ART.cream}"/><path d="M48 174h186l-12 18H60Z" fill="${ART.corn}"/>${_heart(141,128,1.2,ART.pink)}<rect x="290" y="46" width="32" height="32" rx="4" fill="${ART.yel}" transform="rotate(7 306 62)"/>`,
  // 4 thương ai đó
  `<g transform="rotate(-8 120 118)"><rect x="40" y="62" width="168" height="112" rx="14" fill="${ART.cream}"/><path d="m44 70 80 60 80-60" fill="none"/></g>${_heart(124,116,1.4,ART.hot)}${P(284,176,.66,'hoa-hong')}${_spark(70,36,.7)}`,
  // 5 tiệc
  `<path d="M20 22Q180 70 340 22" fill="none"/>${[52,118,184,250,304].map((x,i)=>{const y=22+Math.sin((x-20)/320*Math.PI)*24;return `<path d="M${x} ${y+3}l20 4-6 28Z" fill="${[ART.pink,ART.yel,ART.cream,ART.lil,ART.org][i]}"/>`;}).join('')}${P(120,176,.62,'cam-tu-cau')}<ellipse cx="270" cy="116" rx="26" ry="32" fill="${ART.red}"/><path d="M270 148c-5 14 7 20 0 34" fill="none"/>${_spark(326,150,.6)}`,
  // 6 gu người
  `${P(78,176,.56,'hong-mon')}${P(282,176,.56,'calla-lily')}${_heart(180,92,2.1,ART.blush)}<path d="M150 150q30 22 60 0" fill="none" stroke-dasharray="1 8" stroke-width="3"/>`,
  // 7 bất đồng
  `${_bubble(36,26,142,78,ART.pale)}${_bubble(184,54,142,78,ART.blush,true)}<path d="M174 40l-12 24h18l-12 26" fill="none" stroke="${ART.yel}" stroke-width="4"/>${P(88,182,.5,'cuc-dai-doa')}${P(272,182,.5,'allium')}`,
  // 8 quy tắc
  `<g transform="rotate(-5 120 112)"><rect x="54" y="30" width="148" height="168" rx="14" fill="${ART.cream}"/><rect x="100" y="20" width="56" height="22" rx="8" fill="${ART.corn}"/><path d="m76 78 8 8 14-16M112 78h62m-98 36 8 8 14-16M112 114h62m-98 36 8 8 14-16M112 150h44" fill="none"/></g>${P(278,176,.66,'lan')}${_spark(318,44,.7)}`,
  // 9 trong mắt mọi người
  `${P(180,172,.66,'anh-tuc')}<circle cx="64" cy="64" r="34" fill="${ART.pale}"/>${_heart(64,64,.9,ART.hot)}<circle cx="296" cy="56" r="30" fill="${ART.blush}"/><path d="m296 40 5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1Z" fill="${ART.yel}"/><circle cx="296" cy="146" r="28" fill="${ART.cream}"/><circle cx="286" cy="146" r="3" fill="${ART.ink}" stroke="none"/><circle cx="296" cy="146" r="3" fill="${ART.ink}" stroke="none"/><circle cx="306" cy="146" r="3" fill="${ART.ink}" stroke="none"/>`,
  // 10 điều sợ nhất
  `<path d="M24 190q44-44 96-6t110-8" fill="none" stroke-dasharray="1 9" stroke-width="3"/><g transform="rotate(-4 118 124)"><rect x="52" y="66" width="124" height="98" rx="16" fill="${ART.org}"/><path d="M98 66V48h32v18M78 70v90M150 70v90" fill="none"/><rect x="104" y="108" width="20" height="14" rx="3" fill="${ART.cream}"/></g>${P(268,176,.64,'thien-dieu')}${_spark(310,38,.7)}`
 ];
 const vn=['Hai chậu hoa và một điểm hẹn','Chậu hoa và tách trà cuối tuần','Chậu hoa cạnh chiếc laptop','Lá thư tình và chậu hồng','Bữa tiệc có cờ và bóng bay','Hai chậu hoa hướng về nhau','Hai khung trò chuyện','Sổ kế hoạch và chậu hoa','Những lời nhắn quanh chậu hoa','Vali và chậu thiên điểu'];
 return _frame(sc[index],360,220,vn[index],'cute-doodle');
}
