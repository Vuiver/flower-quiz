// Clean & Refactored Flower Personality Quiz Web App
// Data extracted & modernized from 5thseasonfloral (Zero-sales, Zero-logo, Full Mobile/WebView Compatibility)

const results = [
  {
    "id": "artiso",
    "name": "Atiso",
    "short": "Atiso",
    "title": "Gỡ từng lớp mới tới tim.",
    "desc": "Lúc đầu bạn hơi khó gần, nhưng ai được bạn mở lòng là được giữ luôn. Bạn ít nhắn tin, mà đã hứa là nhớ. Hội bạn thân của bạn nhỏ xíu, bền kinh khủng.",
    "tags": [
      "Sâu sắc",
      "Chân thành",
      "Quen lâu mới mê"
    ],
    "note": "Không cần kể hết mọi thứ mới được hiểu. Cứ từ từ thôi.",
    "wish": "Chúc bạn gặp người đủ kiên nhẫn để hiểu từng lớp dịu dàng trong bạn.",
    "image": "p18",
    "en": "layers of you",
    "color": "#2426ac",
    "signals": [
      "2D",
      "5C",
      "9D",
      "10B"
    ]
  },
  {
    "id": "dia-lan",
    "name": "Địa lan",
    "short": "Địa lan",
    "title": "Chậm mà chắc, nở lâu tàn.",
    "desc": "Bạn nhắn “về tới nhà chưa?” rồi đợi trả lời thật. Deadline sát nút bạn vẫn rà từng dòng. Thương ai là nhớ cả mấy chuyện họ kể vu vơ hồi tháng trước.",
    "tags": [
      "Điềm tĩnh",
      "Tinh ý",
      "Bền bỉ"
    ],
    "note": "Chậm một chút cũng được. Mình đâu cần chạy theo nhịp của ai.",
    "wish": "Chúc bạn luôn được trân trọng đúng với nhịp điệu của mình.",
    "image": "p12",
    "en": "quietly, beautifully",
    "color": "#2426ac",
    "signals": [
      "3A",
      "4B"
    ]
  },
  {
    "id": "cuc-dai-doa",
    "name": "Cúc đại đóa",
    "short": "Cúc đại đóa",
    "title": "Người giữ lửa của cả hội.",
    "desc": "Group chat im quá là bạn bật mood. Sinh nhật ai, món ai thích, kèo cà phê treo lâu, bạn nhớ hết. Bạn kéo cả hội lại gần nhau, còn lên kế hoạch đàng hoàng để khỏi “ủa rồi đi đâu?”.",
    "tags": [
      "Ấm áp",
      "Hào phóng",
      "Kết nối"
    ],
    "note": "Hôm nay để người khác lo cho bạn một bữa nha.",
    "wish": "Chúc bạn nhận lại thật nhiều niềm vui như những gì bạn đã trao.",
    "image": "p1",
    "en": "a heart in full bloom",
    "color": "#2426ac",
    "signals": [
      "3D",
      "7B",
      "6B"
    ]
  },
  {
    "id": "allium",
    "name": "Allium",
    "short": "Allium",
    "title": "Đầu đầy ý tưởng, miệng đầy câu hay.",
    "desc": "Một câu “hay là…” của bạn có thể thành nguyên buổi brainstorm. Đi làm thì bạn thích thử cách mới, đi chơi thì có câu khiến cả bàn cười sặc. Ý hơi lạ so với số đông cũng kệ, bạn vẫn nói.",
    "tags": [
      "Sáng tạo",
      "Hài hước",
      "Có chính kiến"
    ],
    "note": "Ý tưởng chưa ai hiểu ngay thì cứ giữ đó. Lúc nở là đẹp lắm.",
    "wish": "Chúc trí tưởng tượng của bạn luôn có đủ khoảng trời để nở.",
    "image": "p3",
    "en": "a universe of your own",
    "color": "#2426ac",
    "signals": [
      "1D",
      "3C",
      "6C",
      "8A"
    ]
  },
  {
    "id": "anh-tuc",
    "name": "Anh túc",
    "short": "Anh túc",
    "title": "Rủ đi là đi, hỏi giờ sau.",
    "desc": "Ai nhắn “đi không?” là bạn hỏi “mấy giờ?” liền. Một kèo bất chợt hay tin nhắn ngọt đúng lúc là đủ làm ngày bạn sáng lên. Ở cạnh bạn, ai cũng thấy đời có thêm chút bất ngờ.",
    "tags": [
      "Tự do",
      "Hứng khởi",
      "Giàu cảm xúc"
    ],
    "note": "Được đổi ý, được thử lại. Đâu cần lên kế hoạch cho mọi khoảnh khắc.",
    "wish": "Chúc bạn có thật nhiều ngày được sống hết mình với điều mình yêu.",
    "image": "p9",
    "en": "a little wild, a lot of heart",
    "color": "#2426ac",
    "signals": [
      "6D",
      "8C"
    ]
  },
  {
    "id": "lan",
    "name": "Lan",
    "short": "Lan",
    "title": "Dịu dàng kiểu rất riêng.",
    "desc": "Bạn nghe ra cái “không sao” nào là thật sự không sao. Thương ai, bạn nhớ bài họ hay nghe, tâm trạng họ giấu, mấy chi tiết bé tí. Thế giới của bạn nhiều màu lắm, chỉ là không phải ai cũng được xem bản full.",
    "tags": [
      "Nhạy cảm",
      "Tinh tế",
      "Nhiều tưởng tượng"
    ],
    "note": "Nhạy cảm đâu cần giấu. Bạn xứng đáng ở cạnh người dịu dàng.",
    "wish": "Chúc bạn được yêu thương bằng tất cả sự tinh tế mà bạn luôn dành cho đời.",
    "image": "p11",
    "en": "soft, never ordinary",
    "color": "#2426ac",
    "signals": [
      "1B",
      "4D",
      "7D",
      "9B"
    ]
  },
  {
    "id": "calla-lily",
    "name": "Calla lily",
    "short": "Calla lily",
    "title": "Ít nói nhưng gu thì rõ.",
    "desc": "Bạn không cần có mặt ở mọi cuộc vui. Vài người hợp vía, vài thứ mình mê và một góc riêng là đủ. Bạn ít nói, nhưng đã nói thì ai cũng hiểu bạn muốn gì.",
    "tags": [
      "Có gu",
      "Độc lập",
      "Chọn lọc"
    ],
    "note": "Không cần giải thích mọi lựa chọn. Còn thi thoảng cho ai đó lại gần một chút cũng hay lắm.",
    "wish": "Chúc bạn luôn có không gian để sống theo cách mình thấy đúng.",
    "image": "p23",
    "en": "less noise, more you",
    "color": "#2426ac",
    "signals": [
      "2A",
      "8D",
      "10D"
    ]
  },
  {
    "id": "hong-mon",
    "name": "Hồng môn",
    "short": "Hồng môn",
    "title": "Thích thì nói, chưa ổn thì bàn.",
    "desc": "Bạn rõ ràng: thích là nói, chưa ổn thì bàn lại, xong thì thôi không để bụng. Cả nhóm còn phân vân là bạn chốt luôn. Với người thương, bạn chủ động và hết mình, dù đôi khi kiểu quan tâm hơi “để đó mình lo”.",
    "tags": [
      "Có chính kiến",
      "Chủ động",
      "Hết lòng"
    ],
    "note": "Đâu phải lúc nào cũng phải mạnh mẽ. Ngày cần được ôm cũng dễ thương lắm.",
    "wish": "Chúc bạn luôn đủ tự do để yêu và sống bằng màu sắc của mình.",
    "image": "p24",
    "en": "bold enough to be you",
    "color": "#2426ac",
    "signals": [
      "4C",
      "7A"
    ]
  },
  {
    "id": "lily",
    "name": "Lily",
    "short": "Lily",
    "title": "Người cả hội dựa vào được.",
    "desc": "Cả nhóm còn hỏi “giờ sao?” là bạn đã chia việc xong. Bạn nhận phần khó, nhớ lời hứa, muốn cả đội cùng về đích. Với người thân, câu bạn hay nói là “có mình đây”.",
    "tags": [
      "Tự tin",
      "Trách nhiệm",
      "Đáng tin"
    ],
    "note": "Không cần gánh hết mới đáng tin. Nhờ giúp cũng là cách thương mình đó.",
    "wish": "Chúc bạn luôn có một người sẵn sàng nói “để mình lo” với bạn.",
    "image": "p7",
    "en": "steady in bloom",
    "color": "#2426ac",
    "signals": [
      "1A",
      "3B",
      "9A"
    ]
  },
  {
    "id": "cam-tu-cau",
    "name": "Cẩm tú cầu",
    "short": "Cẩm tú cầu",
    "title": "Có hội là có nhà.",
    "desc": "Quán quen đi lần thứ một trăm vẫn vui, miễn là đúng hội. Bạn mê cuộc hẹn đều đặn, chuyện cũ kể lại vẫn cười. Hội thiếu ai là bạn nhắn hỏi liền, nên chẳng ai bị bỏ quên.",
    "tags": [
      "Gắn bó",
      "Ấm áp",
      "Sống tình cảm"
    ],
    "note": "Vắng một buổi hẹn, tình cảm đâu có vơi. Cứ dành thời gian cho mình nha.",
    "wish": "Chúc bạn luôn có một chỗ ngồi được để dành trong lòng người mình thương.",
    "image": "p14",
    "en": "a place to belong",
    "color": "#2426ac",
    "signals": [
      "1C",
      "2B",
      "5A",
      "10C"
    ]
  },
  {
    "id": "thien-dieu",
    "name": "Thiên điểu",
    "short": "Thiên điểu",
    "title": "Phía bên kia có gì, đi xem thử.",
    "desc": "Đường mới, môn thể thao chưa thử, chuyến đi vừa nghĩ ra, cái nào bạn cũng muốn xem thử. Gặp thử thách bạn khá liều, hay lôi cả hội ra khỏi lịch trình quen. Với bạn, thử mà chưa hoàn hảo vẫn hơn ngồi tiếc “giá mà”.",
    "tags": [
      "Táo bạo",
      "Ham khám phá",
      "Dám thử"
    ],
    "note": "Không cần đi xa mỗi ngày mới thú vị. Nghỉ một nhịp cũng là một phần của chuyến đi.",
    "wish": "Chúc bạn luôn có đủ can đảm và một người đồng hành cho những điều mới.",
    "image": "p21",
    "en": "born to explore",
    "color": "#2426ac",
    "signals": [
      "2C",
      "10A"
    ]
  },
  {
    "id": "hoa-hong",
    "name": "Hoa hồng",
    "short": "Hoa hồng",
    "title": "Thương là phải cho người ta thấy.",
    "desc": "Bạn không để người thương phải đoán. Một câu nói rõ, món quà chọn kỹ hay ngày kỷ niệm được nhớ, đó là cách bạn nói “bạn quan trọng với mình”. Bạn mê lãng mạn có câu chuyện riêng hơn là màn bất ngờ chỉ để cho hoành tráng.",
    "tags": [
      "Lãng mạn",
      "Chu đáo",
      "Chân thành"
    ],
    "note": "Không cần lúc nào cũng hoàn hảo. Đôi khi một câu hỏi han đúng lúc là đủ làm ai đó thấy được nâng niu.",
    "wish": "Chúc bạn được đáp lại bằng một tình cảm rõ ràng và dịu dàng.",
    "image": "p22",
    "en": "love, thoughtfully",
    "color": "#2426ac",
    "signals": [
      "4A"
    ]
  }
];
const questions = [
  {
    "chapter": "Đi chơi nhóm",
    "title": "Đi chơi nhóm mà mãi chưa chốt được chỗ, bạn thường…",
    "story": "",
    "image": "p1",
    "options": [
      [
        "Đứng ra chốt luôn và chia việc cho từng người."
      ],
      [
        "Im lặng quan sát xem ai đang thấy không thoải mái."
      ],
      [
        "Nhắn riêng cho người thân nhất: “Đi đâu cũng được, có cậu là vui.”"
      ],
      [
        "Đề xuất một nơi chưa ai từng thử."
      ]
    ]
  },
  {
    "chapter": "Cuối tuần",
    "title": "Cuối tuần được rảnh trọn một ngày, bạn muốn…",
    "story": "",
    "image": "p21",
    "options": [
      [
        "Mặc đẹp, đi triển lãm hoặc ngồi cà phê một mình theo gu riêng."
      ],
      [
        "Hẹn hội bạn thân ở quán quen và tám chuyện cả buổi."
      ],
      [
        "Đi đâu đó thật xa hoặc thử một môn thể thao mới."
      ],
      [
        "Ở nhà đọc sách, nấu ăn, không ai làm phiền."
      ]
    ]
  },
  {
    "chapter": "Làm nhóm",
    "title": "Sát giờ nộp bài nhóm thì có sự cố xảy ra, bạn thường…",
    "story": "",
    "image": "p7",
    "options": [
      [
        "Bình tĩnh rà soát từng chi tiết và âm thầm sửa lỗi."
      ],
      [
        "Đứng ra phân lại việc và giữ tinh thần cả nhóm."
      ],
      [
        "Nghĩ ngay một cách giải quyết bất ngờ nhưng hiệu quả."
      ],
      [
        "Hỏi han mọi người trước, động viên nhau cùng cố gắng."
      ]
    ]
  },
  {
    "chapter": "Thương ai đó",
    "title": "Khi thương một người, bạn thể hiện tình cảm bằng cách…",
    "story": "",
    "image": "p22",
    "options": [
      [
        "Nói rõ ràng, chuẩn bị quà chu đáo và nhớ các ngày đặc biệt."
      ],
      [
        "Quan tâm bằng việc làm: mua đồ ăn, dặn mặc ấm, giúp việc nhà."
      ],
      [
        "Nói thẳng điều mình nghĩ, thích hay không đều rõ ràng."
      ],
      [
        "Lắng nghe thật kỹ và nhớ những sở thích nhỏ của họ."
      ]
    ]
  },
  {
    "chapter": "Đi tiệc",
    "title": "Đến một buổi tiệc đông người mà bạn chỉ quen vài người, bạn sẽ…",
    "story": "",
    "image": "p14",
    "options": [
      [
        "Ở cạnh nhóm quen, trò chuyện cho thoải mái."
      ],
      [
        "Chủ động đi làm quen vài gương mặt mới."
      ],
      [
        "Tìm một góc yên tĩnh, ai bắt chuyện thì mới nói."
      ],
      [
        "Hòa vào vui một lúc rồi kiếm cớ về sớm vì thấy hết năng lượng."
      ]
    ]
  },
  {
    "chapter": "Gu người",
    "title": "Bạn dễ bị thu hút bởi kiểu người nào nhất?",
    "story": "",
    "image": "p9",
    "options": [
      [
        "Độc lập, có cá tính và quyết đoán."
      ],
      [
        "Ấm áp, biết quan tâm, ở cạnh thấy bình yên."
      ],
      [
        "Hài hước, thông minh, nhìn đời rất khác."
      ],
      [
        "Tự do, giàu cảm xúc, dám sống hết mình."
      ]
    ]
  },
  {
    "chapter": "Bất đồng",
    "title": "Khi bất đồng ý kiến với bạn bè hoặc đồng nghiệp, bạn thường…",
    "story": "",
    "image": "p12",
    "options": [
      [
        "Nói thẳng vào vấn đề, giải quyết xong rồi thôi."
      ],
      [
        "Tìm điểm chung để giữ hòa khí."
      ],
      [
        "Im lặng suy nghĩ kỹ, cần thiết mới lên tiếng."
      ],
      [
        "Dễ mềm lòng theo cảm xúc của đối phương và nhường họ."
      ]
    ]
  },
  {
    "chapter": "Quy tắc",
    "title": "Với những quy tắc có sẵn, bạn thường…",
    "story": "",
    "image": "p23",
    "options": [
      [
        "Làm theo nếu hợp lý, nhưng sẵn sàng thử cách mới."
      ],
      [
        "Thích mọi thứ theo kế hoạch rõ ràng."
      ],
      [
        "Làm theo cảm xúc và trực giác lúc đó."
      ],
      [
        "Chọn điều hợp với mình, không chạy theo số đông."
      ]
    ]
  },
  {
    "chapter": "Trong mắt mọi người",
    "title": "Người xung quanh hay nhận xét bạn là người…",
    "story": "",
    "image": "p3",
    "options": [
      [
        "Đáng tin, giao việc là yên tâm."
      ],
      [
        "Tinh tế, hiểu người khác trước khi họ kịp nói."
      ],
      [
        "Thú vị, hay có những câu đùa thông minh."
      ],
      [
        "Hơi khó gần lúc đầu, nhưng thân rồi thì chân thành và sâu sắc."
      ]
    ]
  },
  {
    "chapter": "Điều sợ nhất",
    "title": "Nếu cuộc sống là một chuyến đi, điều bạn sợ nhất là…",
    "story": "",
    "image": "p18",
    "options": [
      [
        "Mỗi ngày đều giống nhau, nhạt nhẽo."
      ],
      [
        "Gặp những mối quan hệ thiếu chân thành."
      ],
      [
        "Phải đi một mình, không có ai bên cạnh."
      ],
      [
        "Phải sống theo ý muốn của người khác."
      ]
    ]
  }
];
const secondarySignals = {
  "5B": [
    "lily",
    "hong-mon"
  ],
  "5D": [
    "artiso",
    "calla-lily"
  ],
  "6A": [
    "calla-lily",
    "hong-mon"
  ],
  "7C": [
    "artiso",
    "dia-lan"
  ],
  "8B": [
    "dia-lan",
    "lily"
  ],
  "9C": [
    "allium"
  ]
};
const OPTW = [[1.07, 1.05, 0.96, 0.94], [1.02, 1.04, 1.31, 0.8], [0.97, 1.07, 0.92, 1.07], [1.35, 0.82, 1.05, 0.95], [1.05, 1.09, 0.84, 1.09], [0.94, 1.02, 0.87, 1.27], [1.09, 1.01, 0.93, 0.98], [0.91, 0.99, 1.3, 0.91], [1.13, 1.11, 1.09, 0.79], [1.31, 0.8, 1.04, 1.02]];
const MULT = {"artiso": 0.85, "hong-mon": 1.08, "anh-tuc": 1.1, "thien-dieu": 1.06, "dia-lan": 1.05};
const TRAITS = {
  "artiso": [
    [
      "Trong hội bạn",
      "Ít nói, hội nhỏ mà bền. Quen lâu mới thấy bạn hài hước."
    ],
    [
      "Khi thương ai đó",
      "Thương là nhớ lâu, hứa là làm, không cần nói nhiều."
    ],
    [
      "Khi áp lực",
      "Thu mình lại, im lặng vài hôm rồi tự ổn."
    ],
    [
      "Điều cần để ý",
      "Hay giữ trong lòng, đôi khi người ta tưởng bạn không sao."
    ]
  ],
  "dia-lan": [
    [
      "Trong hội bạn",
      "Người hỏi “về tới nhà chưa” và thật sự chờ câu trả lời."
    ],
    [
      "Khi thương ai đó",
      "Nhớ mấy chuyện nhỏ họ kể vu vơ từ tháng trước."
    ],
    [
      "Khi áp lực",
      "Chậm lại, rà soát từng việc cho chắc."
    ],
    [
      "Điều cần để ý",
      "Hay cân nhắc quá lâu, bỏ lỡ vài cơ hội."
    ]
  ],
  "cuc-dai-doa": [
    [
      "Trong hội bạn",
      "Người bật mood khi group chat im quá, nhớ sinh nhật cả hội."
    ],
    [
      "Khi thương ai đó",
      "Cho đi hào phóng, chăm cả người chưa kịp mở lời."
    ],
    [
      "Khi áp lực",
      "Gồng lo cho mọi người, quên mình cũng cần nghỉ."
    ],
    [
      "Điều cần để ý",
      "Dễ mệt khi ai cũng dựa vào mà không ai hỏi lại."
    ]
  ],
  "allium": [
    [
      "Trong hội bạn",
      "Người ném ra “hay là…” rồi cả bàn bàn tới khuya."
    ],
    [
      "Khi thương ai đó",
      "Thương bằng sự thú vị, kể chuyện và làm người kia cười."
    ],
    [
      "Khi áp lực",
      "Nghĩ ra cách mới, đôi khi hơi lạ nhưng chạy được."
    ],
    [
      "Điều cần để ý",
      "Hay bỏ dở khi hứng thú sang chuyện khác."
    ]
  ],
  "anh-tuc": [
    [
      "Trong hội bạn",
      "Người rủ đi trước, hỏi giờ sau."
    ],
    [
      "Khi thương ai đó",
      "Cảm xúc dâng nhanh, một tin nhắn ngọt đủ sáng cả ngày."
    ],
    [
      "Khi áp lực",
      "Muốn đổi không khí, đi đâu đó cho thoáng."
    ],
    [
      "Điều cần để ý",
      "Dễ đổi ý giữa chừng, người lên kế hoạch hơi xoay."
    ]
  ],
  "lan": [
    [
      "Trong hội bạn",
      "Nghe ra cái “không sao” nào là thật không sao."
    ],
    [
      "Khi thương ai đó",
      "Nhớ bài họ hay nghe và cả tâm trạng họ giấu."
    ],
    [
      "Khi áp lực",
      "Tưởng tượng nhiều, hay nghĩ ngợi thêm trước khi ngủ."
    ],
    [
      "Điều cần để ý",
      "Dễ để bụng, cần có người hỏi thẳng thì mới nói."
    ]
  ],
  "calla-lily": [
    [
      "Trong hội bạn",
      "Không cần có mặt ở mọi cuộc vui, vài người hợp vía là đủ."
    ],
    [
      "Khi thương ai đó",
      "Ít nói nhưng thương thì rất rõ, thể hiện qua món quà chọn kỹ."
    ],
    [
      "Khi áp lực",
      "Đóng cửa một mình, sắp xếp lại đầu óc."
    ],
    [
      "Điều cần để ý",
      "Hay bị hiểu nhầm là lạnh, dù trong lòng ấm."
    ]
  ],
  "hong-mon": [
    [
      "Trong hội bạn",
      "Cả nhóm còn phân vân là bạn đã chốt."
    ],
    [
      "Khi thương ai đó",
      "Chủ động, hết lòng, kiểu “để đó mình lo”."
    ],
    [
      "Khi áp lực",
      "Nói thẳng, giải quyết xong rồi thôi không để bụng."
    ],
    [
      "Điều cần để ý",
      "Lời thẳng đôi khi làm người nghe hơi giật mình."
    ]
  ],
  "lily": [
    [
      "Trong hội bạn",
      "Cả nhóm hỏi “giờ sao?” là bạn đã chia việc xong."
    ],
    [
      "Khi thương ai đó",
      "Câu hay nói là “có mình đây”, nhớ mọi lời hứa."
    ],
    [
      "Khi áp lực",
      "Nhận phần khó về mình, làm tới cùng."
    ],
    [
      "Điều cần để ý",
      "Ôm việc quá nhiều, quên nhờ ai đỡ."
    ]
  ],
  "cam-tu-cau": [
    [
      "Trong hội bạn",
      "Có hội là có nhà, hội thiếu ai là nhắn hỏi liền."
    ],
    [
      "Khi thương ai đó",
      "Mê hẹn hò đều đặn, chuyện cũ kể lại vẫn cười."
    ],
    [
      "Khi áp lực",
      "Tìm tới người thân, kể ra cho nhẹ lòng."
    ],
    [
      "Điều cần để ý",
      "Hơi ngại thay đổi, quán mới là phải cân nhắc."
    ]
  ],
  "thien-dieu": [
    [
      "Trong hội bạn",
      "Người lôi cả hội ra khỏi lịch trình quen."
    ],
    [
      "Khi thương ai đó",
      "Thương bằng trải nghiệm, rủ đi cùng là nói thương rồi."
    ],
    [
      "Khi áp lực",
      "Càng khó càng muốn thử, hơi liều một chút."
    ],
    [
      "Điều cần để ý",
      "Dễ chán nếu mọi thứ lặp lại."
    ]
  ],
  "hoa-hong": [
    [
      "Trong hội bạn",
      "Người nhớ ngày kỷ niệm, câu chuyện riêng của từng đứa."
    ],
    [
      "Khi thương ai đó",
      "Không để người thương phải đoán, nói rõ và chọn quà kỹ."
    ],
    [
      "Khi áp lực",
      "Tìm người nói chuyện thật lòng, không thích giả vờ ổn."
    ],
    [
      "Điều cần để ý",
      "Kỳ vọng được đáp lại, dễ buồn khi người kia quên."
    ]
  ]
};
const COMPAT = {
  "artiso": {
    "hop": [
      [
        "dia-lan",
        "Cùng chậm mà sâu, ngồi im cũng thấy dễ chịu."
      ],
      [
        "cam-tu-cau",
        "Hội nhỏ mà bền, quen lâu càng mê."
      ],
      [
        "calla-lily",
        "Ít ồn ào, ở cạnh nhau là đủ."
      ]
    ],
    "lech": [
      [
        "anh-tuc",
        "Rủ đi liền, còn bạn cần khởi động đã."
      ],
      [
        "thien-dieu",
        "Kèo bất chợt làm bạn hụt hơi."
      ],
      [
        "allium",
        "Bạn ấy đổi kế hoạch liên tục, bạn cần ổn định."
      ]
    ]
  },
  "dia-lan": {
    "hop": [
      [
        "artiso",
        "Cùng nhịp, khỏi cần nói nhiều."
      ],
      [
        "lily",
        "Bạn tinh ý, Lily lo việc, êm ru."
      ],
      [
        "calla-lily",
        "Cùng thích yên tĩnh, ở cạnh không cần nói."
      ]
    ],
    "lech": [
      [
        "anh-tuc",
        "Bạn hỏi giờ, Anh túc còn chưa biết đi đâu."
      ],
      [
        "allium",
        "Ý tưởng nổ liên tục, bạn chưa kịp thở."
      ],
      [
        "thien-dieu",
        "Bạn ấy đi trước, bạn còn đang lên lịch."
      ]
    ]
  },
  "cuc-dai-doa": {
    "hop": [
      [
        "cam-tu-cau",
        "Hai người giữ hội, group chat không bao giờ chết."
      ],
      [
        "hong-mon",
        "Bạn nhớ hết, bạn ấy dám nói thẳng."
      ],
      [
        "anh-tuc",
        "Rủ đâu cũng đi, vui tới khuya."
      ]
    ],
    "lech": [
      [
        "calla-lily",
        "Bạn rủ cả hội, bạn ấy chỉ cần vài người."
      ],
      [
        "artiso",
        "Bạn nhắn dồn, bạn ấy trả lời chậm."
      ],
      [
        "lan",
        "Bạn muốn cả hội, bạn ấy muốn hai người."
      ]
    ]
  },
  "allium": {
    "hop": [
      [
        "anh-tuc",
        "Rủ nhau làm trò, vui nguyên buổi."
      ],
      [
        "thien-dieu",
        "Bạn nghĩ ra, bạn ấy dám làm."
      ],
      [
        "cuc-dai-doa",
        "Bạn nghĩ ra trò, bạn ấy rủ cả hội chơi."
      ]
    ],
    "lech": [
      [
        "dia-lan",
        "Bạn “hay là…”, bạn ấy cần kế hoạch."
      ],
      [
        "lily",
        "Ý lạ gặp checklist, dễ cãi nhau."
      ],
      [
        "hong-mon",
        "Bạn ấy chốt luôn, ý tưởng của bạn chưa kịp nở."
      ]
    ]
  },
  "anh-tuc": {
    "hop": [
      [
        "thien-dieu",
        "Rủ đi là đi, không ai hỏi giờ."
      ],
      [
        "allium",
        "Hai đứa bày trò nhanh hơn kịp nghĩ."
      ],
      [
        "cuc-dai-doa",
        "Bạn rủ, bạn ấy gom cả hội đi cùng."
      ]
    ],
    "lech": [
      [
        "lily",
        "Bạn đổi ý giữa chừng, bạn ấy đã lo xong kế hoạch."
      ],
      [
        "dia-lan",
        "Bạn sống bất chợt, bạn ấy cần báo trước."
      ],
      [
        "hong-mon",
        "Bạn ấy thẳng thừng chê kèo của bạn."
      ]
    ]
  },
  "lan": {
    "hop": [
      [
        "hoa-hong",
        "Cả hai đều nhớ những chi tiết bé tí."
      ],
      [
        "artiso",
        "Hiểu nhau không cần giải thích nhiều."
      ],
      [
        "calla-lily",
        "Cùng tinh tế, nhìn nhau là hiểu."
      ]
    ],
    "lech": [
      [
        "hong-mon",
        "Bạn ấy nói thẳng, bạn nghe thấm hơi sâu."
      ],
      [
        "thien-dieu",
        "Bạn kịp nghĩ thì bạn ấy đã đi xa rồi."
      ],
      [
        "anh-tuc",
        "Bạn ấy quên chi tiết, bạn nhớ hết."
      ]
    ]
  },
  "calla-lily": {
    "hop": [
      [
        "dia-lan",
        "Hai người ít nói mà ở cạnh vẫn dễ chịu."
      ],
      [
        "artiso",
        "Quen lâu mới thân, không ai ép ai."
      ],
      [
        "lan",
        "Cùng sâu lắng, nói ít vẫn thấm."
      ]
    ],
    "lech": [
      [
        "cuc-dai-doa",
        "Bạn ấy rủ cả hội, bạn cần một góc riêng."
      ],
      [
        "cam-tu-cau",
        "Họp mặt ba lần một tuần, bạn xin nghỉ."
      ],
      [
        "anh-tuc",
        "Bạn ấy rủ bất chợt, bạn cần báo trước."
      ]
    ]
  },
  "hong-mon": {
    "hop": [
      [
        "lily",
        "Cùng dứt khoát, chốt kèo trong 5 phút."
      ],
      [
        "cuc-dai-doa",
        "Bạn thẳng, bạn ấy ấm, cân nhau."
      ],
      [
        "thien-dieu",
        "Cùng dám làm, chốt là chạy."
      ]
    ],
    "lech": [
      [
        "lan",
        "Bạn nói thẳng, bạn ấy để bụng cả tuần."
      ],
      [
        "artiso",
        "Bạn chốt luôn, bạn ấy cần thời gian."
      ],
      [
        "cam-tu-cau",
        "Bạn muốn chốt nhanh, bạn ấy muốn bàn thêm."
      ]
    ]
  },
  "lily": {
    "hop": [
      [
        "hong-mon",
        "Hai người cùng gánh, việc xong trước giờ."
      ],
      [
        "dia-lan",
        "Bạn lo việc, bạn ấy rà từng chi tiết."
      ],
      [
        "artiso",
        "Bạn lên kế hoạch, bạn ấy kiên nhẫn theo."
      ]
    ],
    "lech": [
      [
        "anh-tuc",
        "Kế hoạch của bạn gặp tâm trạng của bạn ấy."
      ],
      [
        "allium",
        "Bạn ấy đổi ý tưởng, bạn đổi checklist."
      ],
      [
        "thien-dieu",
        "Bạn ấy đổi hướng, bạn hụt kế hoạch."
      ]
    ]
  },
  "cam-tu-cau": {
    "hop": [
      [
        "cuc-dai-doa",
        "Hội nào cũng có hai người giữ lửa."
      ],
      [
        "hoa-hong",
        "Cùng mê hẹn hò đều và chuyện cũ kể hoài."
      ],
      [
        "artiso",
        "Hội nhỏ mà bền, càng ở lâu càng mê."
      ]
    ],
    "lech": [
      [
        "calla-lily",
        "Bạn rủ đi, bạn ấy thích ở nhà."
      ],
      [
        "thien-dieu",
        "Bạn mê quán quen, bạn ấy mê đường mới."
      ],
      [
        "anh-tuc",
        "Bạn thích quen thuộc, bạn ấy thích mới."
      ]
    ]
  },
  "thien-dieu": {
    "hop": [
      [
        "anh-tuc",
        "Cùng rủ, cùng đi, cùng liều."
      ],
      [
        "allium",
        "Có người nghĩ ra, có người dám làm."
      ],
      [
        "hong-mon",
        "Cùng dứt khoát, nói đi là đi."
      ]
    ],
    "lech": [
      [
        "cam-tu-cau",
        "Quán quen lần thứ một trăm, bạn hơi nghẹt."
      ],
      [
        "dia-lan",
        "Bạn chạy trước, bạn ấy chưa kịp khởi động."
      ],
      [
        "lily",
        "Bạn bay lên, bạn ấy còn rà checklist."
      ]
    ]
  },
  "hoa-hong": {
    "hop": [
      [
        "lan",
        "Cả hai đều nhớ chi tiết nhỏ của nhau."
      ],
      [
        "cam-tu-cau",
        "Cùng mê cuộc hẹn có câu chuyện riêng."
      ],
      [
        "calla-lily",
        "Cùng thích những phút riêng tư."
      ]
    ],
    "lech": [
      [
        "anh-tuc",
        "Bạn nhớ ngày kỷ niệm, bạn ấy quên ngày hẹn."
      ],
      [
        "allium",
        "Bạn muốn lãng mạn, bạn ấy muốn đùa."
      ],
      [
        "thien-dieu",
        "Bạn muốn ở lại, bạn ấy muốn đi tiếp."
      ]
    ]
  }
};
const PETAL = {"artiso": "#2e9a68", "dia-lan": "#f4e7d4", "cuc-dai-doa": "#f5d04b", "allium": "#b9a6ea", "anh-tuc": "#de4b3a", "lan": "#ec7fa6", "calla-lily": "#f4e7d4", "hong-mon": "#e63b82", "lily": "#f4963a", "cam-tu-cau": "#6f9af0", "thien-dieu": "#f4963a", "hoa-hong": "#ec7fa6"};
const PHOTO_R = {"artiso": 29, "dia-lan": 32, "cuc-dai-doa": 42, "allium": 32, "anh-tuc": 40, "lan": 34, "calla-lily": 27, "hong-mon": 29, "lily": 31, "cam-tu-cau": 38, "thien-dieu": 27, "hoa-hong": 36};

const ARTICLE = { 'cuc-dai-doa': 'bông', 'artiso': 'bông', 'allium': 'bông', 'thien-dieu': 'bông' };
const artOf = r => ARTICLE[r.id] || 'đóa';
const byId = id => results.find(r => r.id === id);

const CAMICO = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 8h3l1.6-2.4h6.8L17 8h3v11H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.4" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
const SHAREICO = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

let answers = [];
let step = 0;
let currentResult = null;
let userPhoto = null;

function getApp() {
  return document.querySelector('#app') || document.body;
}

function mount(html) {
  const el = getApp();
  el.innerHTML = html;
  try { window.scrollTo(0, 0); } catch (e) {}
  try {
    const h = el.querySelector('h1, h2');
    if (h) {
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    }
  } catch (e) {}
}

function score(a) {
  let best = 0, bv = -1, bs = -1;
  results.forEach((r, i) => {
    let v = 0;
    r.signals.forEach(k => {
      const q = parseInt(k) - 1;
      const o = k.charCodeAt(k.length - 1) - 65;
      if (a[q] === o) v += OPTW[q][o];
    });
    v = v / (r.signals.length + 3) * (MULT[r.id] || 1);
    const sec = a.reduce((n, o, q) => n + ((secondarySignals[(q + 1) + String.fromCharCode(65 + o)] || []).includes(r.id) ? 1 : 0), 0);
    if (v > bv + 1e-9 || (Math.abs(v - bv) < 1e-9 && sec > bs)) {
      best = i;
      bv = v;
      bs = sec;
    }
  });
  return best;
}

function home() {
  currentResult = null;
  mount(`
    <section class="hero fade">
      <div class="hero-copy">
        <span class="hero-badge">🌸 PERSONALITY TEST</span>
        <h1>Bạn là<br><em>bông hoa nào?</em></h1>
        <p class="intro">Mỗi người đều mang năng lượng và vẻ đẹp riêng. Khám phá loài hoa đại diện cho cá tính, gu cảm xúc và những mối quan hệ hợp cạ của bạn.</p>
        <button class="primary" id="start">
          <span>Bắt đầu khám phá</span>
          <span class="arrow" aria-hidden="true">→</span>
        </button>
        <p class="micro">${questions.length} câu hỏi đời thường · ${results.length} loài hoa · 3 phút hoàn thành</p>
      </div>
    </section>
  `);
  const btn = document.querySelector('#start');
  if (btn) {
    btn.onclick = () => {
      answers = [];
      step = 0;
      question();
    };
  }
}

function question() {
  const q = questions[step];
  mount(`
    <section class="chapter fade">
      <div class="q-top">
        <button class="back" aria-label="Quay lại">←</button>
        <div class="progress" role="progressbar" aria-label="Tiến độ bài test" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${step}">
          <div style="width: ${ (step / questions.length) * 100 }%"></div>
        </div>
        <span class="counter">${String(step + 1).padStart(2, '0')} / ${questions.length}</span>
      </div>
      <div class="question-layout">
        <div class="scene">${typeof cuteScene === 'function' ? cuteScene(step) : ''}</div>
        <div class="q-copy">
          <span class="eyebrow">${q.chapter} · Câu ${step + 1}</span>
          <h2>${q.title}</h2>
          <div class="answers">
            ${q.options.map((o, i) => `
              <button class="answer" data-index="${i}">
                <span class="letter">${String.fromCharCode(65 + i)}</span>
                <span>${o[0]}</span>
              </button>
            `).join('')}
          </div>
          <p class="micro" style="text-align: center; margin-top: 14px;">Chọn đáp án theo trực giác đầu tiên của bạn nha.</p>
        </div>
      </div>
    </section>
  `);

  const appEl = getApp();
  const backBtn = appEl.querySelector('.back');
  if (backBtn) {
    backBtn.onclick = () => {
      if (step === 0) home();
      else {
        step--;
        answers = answers.slice(0, step);
        question();
      }
    };
  }

  appEl.querySelectorAll('.answer').forEach(b => {
    b.onclick = () => {
      answers[step] = Number(b.dataset.index);
      if (step === questions.length - 1) {
        location.hash = 'result=' + results[score(answers)].id;
      } else {
        step++;
        question();
      }
    };
  });
}

function compatHTML(r) {
  const c = COMPAT[r.id];
  const li = a => {
    const f = byId(a[0]);
    return `<li><span class="av">${typeof flowerArt === 'function' ? flowerArt(f.id, f.name) : ''}</span><div><b>${f.name}</b><small>${a[1]}</small></div></li>`;
  };
  return `
    <section class="compat">
      <div class="cp cp-hop">
        <h3>✨ Bạn hợp cạ nhất với</h3>
        <ul>${c.hop.map(li).join('')}</ul>
      </div>
      <div class="cp cp-lech">
        <h3>⚡ Hơi lệch sóng với</h3>
        <ul>${c.lech.map(li).join('')}</ul>
      </div>
      <button class="dl-btn both-btn" data-variant="both">📥 Tải Story hợp cạ & lệch sóng (1080x1920)</button>
    </section>
  `;
}

function result(index) {
  currentResult = index;
  const r = results[index];
  mount(`
    <section class="result r2 fade">
      <div class="r2-head">
        <span class="eyebrow">YOUR FLOWER ID · PERSONALITY PROFILE</span>
        <h2>Bạn là một ${artOf(r)} ${r.name}.</h2>
        <p class="r2-title">${r.title}</p>
      </div>
      
      <div class="r2-art" id="art-box">${typeof flowerArt === 'function' ? flowerArt(r.id, r.name) : ''}</div>
      
      <div class="photo-row">
        <label class="photo-btn" for="photo-in">
          ${CAMICO}
          <span id="photo-txt">${userPhoto ? 'Đổi ảnh khác' : 'Chèn ảnh của bạn vào nhụy hoa'}</span>
        </label>
        <input id="photo-in" type="file" accept="image/*" hidden>
        <button class="text-btn" id="photo-rm" ${userPhoto ? '' : 'hidden'}>Gỡ ảnh</button>
      </div>
      <p class="photo-note">Ảnh chỉ xử lý trực tiếp trên trình duyệt máy bạn, hoàn toàn riêng tư.</p>

      ${compatHTML(r)}

      <div class="share-row">
        <button class="share-btn" id="share">
          ${SHAREICO}
          <span>Chia sẻ kết quả cho bạn bè</span>
        </button>
      </div>

      <section class="r2-about">
        <div class="tags">
          ${r.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <p>${r.desc}</p>
        
        <h3 class="traits-h">Đặc điểm tính cách của ${r.name}</h3>
        <dl class="traits">
          ${TRAITS[r.id].map(t => `<div><dt>${t[0]}</dt><dd>${t[1]}</dd></div>`).join('')}
        </dl>
        
        <div class="letter-note">
          <small>LỜI NHẮN DÀNH CHO BẠN</small>
          ${r.note}
        </div>
      </section>

      <div class="result-bottom">
        <button class="text-btn" id="again">← Thực hiện lại bài trắc nghiệm</button>
      </div>
    </section>
  `);

  const appEl = getApp();
  const againBtn = appEl.querySelector('#again');
  if (againBtn) {
    againBtn.onclick = () => {
      history.replaceState(null, '', location.pathname + location.search);
      home();
    };
  }

  const shareBtn = appEl.querySelector('#share');
  if (shareBtn) shareBtn.onclick = share;

  appEl.querySelectorAll('.dl-btn').forEach(b => {
    b.onclick = () => downloadCard(b.dataset.variant, b);
  });

  const pin = appEl.querySelector('#photo-in');
  const prm = appEl.querySelector('#photo-rm');
  const box = appEl.querySelector('#art-box');
  const ptx = appEl.querySelector('#photo-txt');

  async function paint() {
    if (!userPhoto) {
      box.innerHTML = typeof flowerArt === 'function' ? flowerArt(r.id, r.name) : '';
      ptx.textContent = 'Chèn ảnh của bạn vào nhụy hoa';
      prm.hidden = true;
      return;
    }
    const c = await artCanvas(r, 800, userPhoto);
    box.innerHTML = `<img class="flower-art" alt="Bông ${r.name} có ảnh của bạn" src="${c.toDataURL('image/png')}">`;
    ptx.textContent = 'Đổi ảnh khác';
    prm.hidden = false;
  }

  if (pin) {
    pin.onchange = async () => {
      const f = pin.files && pin.files[0];
      if (!f) return;
      try {
        userPhoto = await readPhoto(f);
        await paint();
        toast('Đã chèn ảnh của bạn vào bông hoa thành công!');
      } catch (e) {
        toast('Chưa đọc được ảnh này, vui lòng chọn file JPG hoặc PNG nha.');
      }
      pin.value = '';
    };
  }

  if (prm) {
    prm.onclick = () => {
      userPhoto = null;
      paint();
    };
  }

  if (userPhoto) paint();
}

let toastTimer;
function toast(t) {
  let el = document.querySelector('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.append(el);
  }
  el.textContent = t;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 4000);
}

async function copy(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    const a = document.createElement('textarea');
    a.value = text;
    document.body.append(a);
    a.select();
    const ok = document.execCommand('copy');
    a.remove();
    toast(ok ? message : 'Đã sao chép link!');
  }
}

async function share() {
  const r = results[currentResult];
  const data = {
    title: 'Bạn là bông hoa nào? · Personality Quiz',
    text: `Mình đã làm trắc nghiệm và kết quả là một ${artOf(r)} ${r.name} (${r.title}). Còn bạn là bông hoa nào?`,
    url: location.href
  };
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }
  await copy(data.text + ' ' + data.url, 'Đã copy kết quả và liên kết, chia sẻ cho bạn thân ngay nha!');
}

async function svgImg(id, name, px) {
  let svg = typeof flowerArt === 'function' ? flowerArt(id, name) : '';
  if (svg.indexOf('xmlns=') < 0) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  svg = svg.replace(/<svg([^>]*?)\swidth="[^"]*"/, '<svg$1').replace(/<svg([^>]*?)\sheight="[^"]*"/, '<svg$1').replace('<svg', `<svg width="${px}" height="${px}"`);
  const u = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  const im = new Image();
  im.src = u;
  try {
    await im.decode();
  } catch (e) {
    await new Promise(res => {
      im.onload = res;
      im.onerror = res;
    });
  }
  setTimeout(() => URL.revokeObjectURL(u), 8000);
  return im;
}

async function readPhoto(file) {
  let bmp;
  try {
    bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch (e) {
    bmp = await new Promise((res, rej) => {
      const u = URL.createObjectURL(file), im = new Image();
      im.onload = () => {
        res(im);
        setTimeout(() => URL.revokeObjectURL(u), 3000);
      };
      im.onerror = rej;
      im.src = u;
    });
  }
  const w = bmp.width || bmp.naturalWidth;
  const h = bmp.height || bmp.naturalHeight;
  const s = Math.min(w, h);
  const c = document.createElement('canvas');
  c.width = c.height = 600;
  c.getContext('2d').drawImage(bmp, (w - s) / 2, (h - s) / 2, s, s, 0, 0, 600, 600);
  return c;
}

async function artCanvas(r, px, photo) {
  const im = await svgImg(r.id, r.name, px);
  const c = document.createElement('canvas');
  c.width = c.height = px;
  const x = c.getContext('2d');
  x.drawImage(im, 0, 0, px, px);

  if (photo && typeof SPEC !== 'undefined') {
    const k = px / 400;
    const s = SPEC[r.id] || { lean: 0 };
    const hx = (196 + s.lean * 1.32) * k;
    const hy = (278 - 112 * 1.32) * k;
    const PR = (typeof PHOTO_R !== 'undefined' && PHOTO_R[r.id]) || 40;
    const pr = PR * k;
    x.lineWidth = 3 * k;
    x.strokeStyle = ART.ink;
    x.save();
    x.shadowColor = 'rgba(11,29,58,.28)';
    x.shadowBlur = 10 * k;
    x.shadowOffsetY = 3 * k;
    x.beginPath();
    x.arc(hx, hy, pr + 5 * k, 0, 6.3);
    x.fillStyle = ART.cream;
    x.fill();
    x.restore();
    x.beginPath();
    x.arc(hx, hy, pr + 5 * k, 0, 6.3);
    x.stroke();
    x.save();
    x.beginPath();
    x.arc(hx, hy, pr, 0, 6.3);
    x.clip();
    x.drawImage(photo, hx - pr, hy - pr, pr * 2, pr * 2);
    x.restore();
    x.beginPath();
    x.arc(hx, hy, pr, 0, 6.3);
    x.lineWidth = 2 * k;
    x.stroke();
  }
  return c;
}

// Story Card Generator (1080x1920) with robust cross-browser safeguards
async function makeCard(variant) {
  variant = variant === 'lech' ? 'lech' : variant === 'both' ? 'both' : 'hop';
  const r = results[currentResult];
  const cp = COMPAT[r.id][variant === 'both' ? 'hop' : variant];
  
  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

  const W = 1080, H = 1920, FF = '"Be Vietnam Pro", Arial, sans-serif';
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d');

  x.fillStyle = '#fff8ee';
  x.fillRect(0, 0, W, H);
  x.fillStyle = '#e6dccb';
  for (let yy = 18; yy < H; yy += 36) {
    for (let xx = 18; xx < W; xx += 36) {
      x.beginPath();
      x.arc(xx, yy, 2, 0, 6.3);
      x.fill();
    }
  }

  const rr = (px, py, w, h, rad) => {
    x.beginPath();
    x.moveTo(px + rad, py);
    x.arcTo(px + w, py, px + w, py + h, rad);
    x.arcTo(px + w, py + h, px, py + h, rad);
    x.arcTo(px, py + h, px, py, rad);
    x.arcTo(px, py, px + w, py, rad);
    x.closePath();
  };

  const spaced = (t, cx, cy, gap) => {
    let tw = 0;
    for (const ch of t) tw += x.measureText(ch).width + gap;
    tw -= gap;
    let px = cx - tw / 2;
    x.textAlign = 'left';
    for (const ch of t) {
      x.fillText(ch, px, cy);
      px += x.measureText(ch).width + gap;
    }
    x.textAlign = 'center';
  };

  x.textAlign = 'center';
  x.textBaseline = 'alphabetic';

  // Badge Header
  x.save();
  x.translate(540, 236);
  x.rotate(-0.03);
  rr(-250, -44, 500, 88, 44);
  x.fillStyle = '#10108f';
  x.fill();
  x.fillStyle = '#fff';
  x.font = '600 30px ' + FF;
  spaced('WHAT FLOWER ARE YOU?', 0, 11, 5);
  x.restore();

  const B = variant === 'both';
  const AH = B ? 150 : 260;
  const art = await artCanvas(r, 1040, userPhoto);

  x.save();
  x.translate(540, B ? 455 : 590);
  x.rotate(-0.03);
  x.shadowColor = 'rgba(16,16,143,.18)';
  x.shadowBlur = 36;
  x.shadowOffsetY = 14;
  rr(-AH, -AH, AH * 2, AH * 2, 52);
  x.fillStyle = '#3a63ad';
  x.fill();
  x.shadowColor = 'transparent';
  rr(-AH, -AH, AH * 2, AH * 2, 52);
  x.clip();
  x.drawImage(art, -AH, -AH, AH * 2, AH * 2);
  x.restore();

  x.fillStyle = '#10108f';
  x.font = '500 ' + (B ? 38 : 46) + 'px ' + FF;
  x.fillText('Bạn là một ' + artOf(r), 540, B ? 690 : 925);

  let fs = B ? 96 : 124;
  x.font = '600 ' + fs + 'px ' + FF;
  const nm = r.name + '.';
  while (x.measureText(nm).width > 900 && fs > 60) {
    fs -= 4;
    x.font = '600 ' + fs + 'px ' + FF;
  }
  x.fillText(nm, 540, B ? 790 : 1042);

  x.fillStyle = '#3a63ad';
  x.font = 'italic 400 ' + (B ? 32 : 40) + 'px ' + FF;
  x.fillText(r.en, 540, B ? 838 : 1118);

  // Tags
  let ly = B ? 886 : 1180;
  x.font = '500 ' + (B ? 27 : 28) + 'px ' + FF;
  const pads = B ? 30 : 34, gap = 14, hh = B ? 54 : 58;
  const ws = r.tags.map(t => x.measureText(t).width + pads * 2);
  let total = ws.reduce((a, b) => a + b, 0) + gap * (ws.length - 1);
  if (total > 980) {
    x.font = '500 24px ' + FF;
    for (let i = 0; i < ws.length; i++) ws[i] = x.measureText(r.tags[i]).width + 52;
    total = ws.reduce((a, b) => a + b, 0) + gap * (ws.length - 1);
  }

  let cx = 540 - total / 2;
  const cy = ly - 6;
  r.tags.forEach((t, i) => {
    rr(cx, cy, ws[i], hh, 29);
    x.fillStyle = '#f6bfd6';
    x.fill();
    x.lineWidth = 3;
    x.strokeStyle = '#0b1d3a';
    x.stroke();
    x.fillStyle = '#0b1d3a';
    x.fillText(t, cx + ws[i] / 2, cy + hh / 2 + 10);
    cx += ws[i] + gap;
  });

  // Compat boxes
  const box = async (by, bh, hop, cp_data, k) => {
    x.save();
    x.shadowColor = 'rgba(16,16,143,.15)';
    x.shadowBlur = 24;
    x.shadowOffsetY = 10;
    rr(70, by, 940, bh, 44);
    x.fillStyle = hop ? '#f6bfd6' : '#10108f';
    x.fill();
    x.restore();
    x.lineWidth = 4;
    x.strokeStyle = '#0b1d3a';
    rr(70, by, 940, bh, 44);
    x.stroke();

    const tc = hop ? '#10108f' : '#ffffff';
    x.fillStyle = tc;
    x.font = '600 ' + (k ? 34 : 40) + 'px ' + FF;
    x.fillText(hop ? 'Bạn hợp cạ với' : 'Hơi lệch sóng với', 540, by + (k ? 54 : 64));

    const imgs = await Promise.all(cp_data.map(a => svgImg(a[0], '', 320)));
    const hs = k ? 56 : 76, cyy = by + (k ? 148 : 178), n = cp_data.length, st = 300;
    for (let i = 0; i < n; i++) {
      const f = byId(cp_data[i][0]);
      const mx = 540 + (i - (n - 1) / 2) * st;
      x.save();
      x.translate(mx, cyy);
      x.rotate(i % 2 ? 0.03 : -0.03);
      rr(-hs, -hs, hs * 2, hs * 2, 24);
      x.fillStyle = '#3a63ad';
      x.fill();
      x.lineWidth = 3;
      x.strokeStyle = '#0b1d3a';
      x.stroke();
      x.save();
      rr(-hs, -hs, hs * 2, hs * 2, 24);
      x.clip();
      x.drawImage(imgs[i], 48, 26, 224, 224, -hs, -hs, hs * 2, hs * 2);
      x.restore();
      x.restore();

      x.fillStyle = tc;
      x.font = '600 ' + (k ? 28 : 32) + 'px ' + FF;
      x.fillText(f.name, mx, by + (k ? 258 : 314));
      x.font = '400 ' + (k ? 21 : 23) + 'px ' + FF;
      let rl = '', ry = by + (k ? 290 : 350);
      const rw = cp_data[i][1].split(' ');
      const rows = [];
      for (const w of rw) {
        const t = rl ? rl + ' ' + w : w;
        if (x.measureText(t).width > 272 && rl) {
          rows.push(rl);
          rl = w;
        } else rl = t;
      }
      rows.push(rl);
      for (const q of rows.slice(0, 3)) {
        x.fillText(q, mx, ry);
        ry += k ? 26 : 30;
      }
    }
  };

  if (variant === 'both') {
    const C = COMPAT[r.id];
    await box(962, 400, true, C.hop, 1);
    await box(1384, 400, false, C.lech, 1);
  } else {
    await box(1340, 450, variant === 'hop', cp, 0);
  }

  x.fillStyle = '#6b6f8a';
  x.font = '400 26px ' + FF;
  spaced('Personality Quiz · Bạn là bông hoa nào?', 540, B ? 1865 : 1850, 2);
  return c;
}

// Universal Modal Download (Cross-platform WebView Compatible)
async function downloadCard(variant, btn) {
  variant = variant === 'lech' ? 'lech' : variant === 'both' ? 'both' : 'hop';
  const b = btn || document.querySelector('.dl-btn');
  const oldText = b ? b.textContent : '';
  if (b) {
    b.disabled = true;
    b.textContent = 'Đang khởi tạo ảnh Story…';
  }

  try {
    const c = await makeCard(variant);
    const blob = await new Promise(res => c.toBlob(res, 'image/png'));
    if (!blob) throw new Error('Cannot export canvas to blob');
    const name = 'flower-quiz-' + results[currentResult].id + '-' + variant + '.png';
    const url = URL.createObjectURL(blob);

    const overlay = document.querySelector('#cardModalOverlay');
    const modalBox = document.querySelector('#cardModalContent');
    
    if (overlay && modalBox) {
      modalBox.innerHTML = `
        <button class="close-card" id="closeCardBtn" aria-label="Đóng">×</button>
        <h3>Thẻ Story ${variant === 'both' ? 'Hợp cạ & Lệch sóng' : variant === 'hop' ? 'Hợp cạ' : 'Lệch sóng'}</h3>
        <p>Nhấn giữ ảnh hoặc bấm nút bên dưới để tải ảnh về đăng Story Facebook / Instagram / TikTok nhé!</p>
        <img src="${url}" alt="Thẻ Story ${results[currentResult].name}">
        <div>
          <a class="primary" href="${url}" download="${name}">Lưu ảnh về máy ↓</a>
        </div>
      `;
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');

      const close = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        URL.revokeObjectURL(url);
      };

      const closeBtn = document.querySelector('#closeCardBtn');
      if (closeBtn) closeBtn.onclick = close;
      overlay.onclick = (e) => {
        if (e.target === overlay) close();
      };
    }
  } catch (e) {
    toast('Chưa tạo được ảnh, vui lòng thử lại nha.');
    console.error(e);
  } finally {
    if (b) {
      b.disabled = false;
      b.textContent = oldText;
    }
  }
}

function bindGlobalEvents() {
  const startBtn = document.querySelector('#start');
  if (startBtn) {
    startBtn.onclick = () => {
      answers = [];
      step = 0;
      question();
    };
  }
  const brandBtn = document.querySelector('.brand-badge');
  if (brandBtn) {
    brandBtn.onclick = (e) => {
      e.preventDefault();
      history.replaceState(null, '', location.pathname + location.search);
      home();
    };
  }
}

function route() {
  const hash = location.hash || '';
  const id = new URLSearchParams(hash.replace(/^#/, '')).get('result');
  const i = results.findIndex(r => r.id === id);
  if (i >= 0) result(i);
  else home();
}

window.addEventListener('hashchange', route);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bindGlobalEvents();
    route();
  });
} else {
  bindGlobalEvents();
  route();
}
