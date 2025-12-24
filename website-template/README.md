# SimpleBit - Static Website Template

A complete static HTML/CSS/Bootstrap/JavaScript website for SimpleBit, a payment processing platform.

## 📁 Folder Structure

```
website-template/
├── index.html              # Home page
├── css/
│   └── style.css          # Custom styles
├── js/
│   └── script.js          # jQuery & JavaScript functionality
├── images/
│   └── logo.png           # Logo (favicon)
└── pages/
    ├── about.html         # About Us page
    ├── features.html      # Features page
    ├── pricing.html       # Pricing page
    ├── contact.html       # Contact Us page
    ├── case-studies.html  # Success Stories page
    └── faq.html          # FAQ page
```

## 🚀 Getting Started

### Upload to Server

1. Download all files in the `website-template` folder
2. Upload to your web server using FTP or file manager
3. No installation or build process required
4. Works on any server that supports static files

### Local Testing

Simply open `index.html` in your web browser to view the website locally.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling
- **Bootstrap 5** - Responsive framework
- **jQuery** - JavaScript functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & DM Sans)

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Bootstrap 5
- ✅ Smooth animations and transitions
- ✅ Form validation
- ✅ Counter animations
- ✅ Accordion FAQ sections
- ✅ Contact form with validation
- ✅ Navigation with active states
- ✅ Mobile hamburger menu

## 🎨 Customization

### Update Logo
Replace `images/logo.png` with your logo file.

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary: #8A2BE2;  /* Purple */
    --secondary: #f5f5f5;
    --text-dark: #1e1e2e;
    --text-light: #666;
}
```

### Update Content
Edit HTML files directly to update text, images, and content.

### Add New Pages
1. Create a new `.html` file in the `pages/` folder
2. Copy the structure from an existing page
3. Add navigation links to the navbar in all pages

## 📧 Contact Form

The contact form includes:
- Name, Email, Phone, Company fields
- Subject dropdown
- Message textarea
- Form validation
- Success message display

**Note**: The form is client-side only. To handle submissions, you'll need to add server-side processing.

## 🔍 SEO

Each page includes:
- Unique title tags
- Meta descriptions
- Open Graph tags
- Proper heading hierarchy

## 📞 Support

For questions about customization, refer to the comments in the HTML and CSS files.

## 📄 License

All files are ready for deployment on any web server.

---

**Ready to deploy?** Upload the entire `website-template` folder to your hosting provider's public_html or www folder.