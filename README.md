# 🌸 Flower Personality Quiz — Bạn là bông hoa nào?

Trắc nghiệm tính cách tương tác trực quan (Interactive Personality Quiz). Khám phá loài hoa đại diện cho năng lượng, cá tính và gu cảm xúc của bạn qua 10 câu hỏi đời thường.

![Preview](https://raw.githubusercontent.com/Vuiver/flower-quiz/main/data/flower_quiz_data.json)

## ✨ Điểm nổi bật
- **10 câu hỏi đời thường gần gũi:** Đi chơi nhóm, Cuối tuần, Làm nhóm, Thương ai đó, Đi tiệc, Gu người, Bất đồng, Quy tắc, Trong mắt mọi người, Điều sợ nhất.
- **12 loài hoa cá tính:** Atiso, Địa lan, Cúc đại đóa, Allium, Anh túc, Lan, Calla lily, Hồng môn, Lily, Cẩm tú cầu, Thiên điểu, Hoa hồng.
- **Ma trận tương thích (Compatibility):** Khám phá 3 loài hoa Hợp cạ và 3 loài hoa Hơi lệch sóng với bạn.
- **Tải ảnh cá nhân vào nhụy hoa:** Xử lý trực tiếp trên Canvas trình duyệt của người dùng (100% Client-side, bảo mật riêng tư).
- **Xuất thẻ Story 1080x1920 px:** Tạo ảnh chia sẻ chuẩn kích thước Instagram / Facebook / TikTok Story với độ nét cao.
- **Vector SVG thuần túy:** Toàn bộ minh họa hoa và doodle được sinh động học bằng code SVG, siêu nhẹ và sắc nét ở mọi độ phân giải.
- **Zero-build / Zero-dependency:** Không cần `npm install` hay build tool phức tạp, mở file `index.html` là chạy ngay.

## 🚀 Trải nghiệm trực tiếp (Live Demo)
👉 **[Trải nghiệm Web Quiz tại đây](https://vuiver.github.io/flower-quiz/)**

## 📂 Cấu trúc mã nguồn
```text
├── index.html                  # Giao diện chính
├── style.css                   # Thiết kế responsive, palette màu pastel aesthetic
├── illustrations.js            # Engine vẽ vector SVG cho 12 loài hoa và doodle
├── app.js                      # Routing, scoring, render canvas story
├── data/
│   └── flower_quiz_data.json   # CSDL trích xuất sạch (10 câu hỏi, 12 hoa, ma trận điểm)
└── README.md
```

## 🛠 Bản quyền & Phát triển
- Được phát triển và tinh chỉnh độc lập bởi **Mix Digital**.
- Đã loại bỏ hoàn toàn logo và các yếu tố bán hàng của trang web mẫu cũ, tập trung 100% vào trải nghiệm tương tác gamification.
