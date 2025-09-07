# 🏔️ Himalayan Masters Art

A beautiful NFT marketplace showcasing authentic artworks from Himalayan artists, built on the Internet Computer blockchain.

![Himalayan Masters Art](https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **🎨 Authentic Artworks**: Curated collection of traditional and contemporary Himalayan art
- **🔐 Secure Authentication**: Internet Identity integration for seamless user experience
- **📱 Modern UI**: Responsive design with warm amber/orange theme inspired by Himalayan culture
- **🏛️ Gallery Management**: Easy gallery establishment and artwork creation
- **💎 Rich Metadata**: Comprehensive artwork information including artist, medium, year, and attributes
- **🔄 Seamless Transfers**: Gift artworks to friends and family
- **⚡ Fast & Efficient**: Built on Internet Computer for low-cost, high-performance transactions

## 🛠️ Technology Stack

- **Backend**: Motoko smart contracts implementing ICRC-7 NFT standard
- **Frontend**: React 19 with modern hooks and context
- **Styling**: Tailwind CSS with glassmorphism effects
- **Authentication**: Internet Identity
- **Blockchain**: Internet Computer (IC)
- **Build Tool**: Vite for fast development

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [DFX](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (Internet Computer SDK)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/satyasaibabakrishna-droid/NFT-HIMALAYA.git
cd NFT-HIMALAYA
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the local Internet Computer replica:**
```bash
dfx start --background
```

4. **Deploy the canisters:**
```bash
dfx deploy
```

5. **Start the development server:**
```bash
npm run dev
```

6. **Open your browser** and navigate to the local development URL (usually `http://localhost:5173`)

## 🎯 How to Use

### For Gallery Owners
1. **Authenticate** with Internet Identity
2. **Establish Gallery** - Be the first to claim the gallery
3. **Create Artworks** - Mint beautiful NFT artworks for collectors
4. **Manage Collection** - Oversee your Himalayan art collection

### For Art Collectors
1. **Browse Gallery** - Explore authentic Himalayan artworks
2. **Collect Artworks** - Receive unique pieces from gallery owners
3. **View Collection** - See all your collected artworks
4. **Gift Artworks** - Share beautiful pieces with friends and family

## 🏗️ Project Structure

```
├── backend/                    # Motoko smart contracts
│   ├── app.mo                 # Main NFT canister
│   └── defaultConfig.mo       # Collection configuration
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── contexts/         # React contexts
│   │   └── App.jsx           # Main application
│   └── public/               # Static assets
├── src/declarations/         # Generated type declarations
├── dfx.json                  # DFX configuration
└── package.json              # Dependencies
```

## 🎨 Artwork Metadata

Each artwork includes rich metadata:
- **Name**: Unique artwork title
- **Artist**: Himalayan Master Artist
- **Description**: Detailed artwork description
- **Medium**: Art medium (Digital Art, Traditional, etc.)
- **Year**: Creation year
- **Collection**: Himalayan Masters Art
- **Attributes**: Style, region, rarity, authenticity

## 🌟 Key Features

### Modern Design
- Warm color palette inspired by Himalayan sunsets
- Glassmorphism effects for modern aesthetics
- Responsive design for all devices
- Smooth animations and transitions

### Blockchain Integration
- ICRC-7 standard compliance
- Internet Computer blockchain
- Low transaction costs
- Fast confirmation times

### User Experience
- Intuitive gallery management
- Easy artwork creation and transfer
- Real-time updates
- Error handling and notifications

## 🤝 Contributing

We welcome contributions to Himalayan Masters Art! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all changes work on Internet Computer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Himalayan Artists**: For their beautiful and authentic artworks
- **Internet Computer**: For providing the blockchain infrastructure
- **Motoko Community**: For excellent documentation and support
- **React Community**: For the amazing frontend framework

## 📞 Support

If you have any questions or need help:

- **Issues**: [GitHub Issues](https://github.com/satyasaibabakrishna-droid/NFT-HIMALAYA/issues)
- **Discussions**: [GitHub Discussions](https://github.com/satyasaibabakrishna-droid/NFT-HIMALAYA/discussions)

---

**Built with ❤️ for the Himalayan art community**

*Discover, collect, and share authentic Himalayan masterpieces on the blockchain.*