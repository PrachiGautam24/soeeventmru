#!/bin/bash

# ============================================================================
# ICASS 2026 - Automated Setup Script
# ============================================================================
# This script automates the setup process for the ICASS 2026 web application
# Run this script from the project root directory
# ============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "\n${BLUE}============================================================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}============================================================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "START-HERE.md" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# ============================================================================
# STEP 1: Check Prerequisites
# ============================================================================

print_header "STEP 1: Checking Prerequisites"

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    print_success "Node.js installed: $NODE_VERSION"
else
    print_error "Node.js is not installed!"
    print_info "Please install Node.js 18 or higher from https://nodejs.org"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    print_success "npm installed: $NPM_VERSION"
else
    print_error "npm is not installed!"
    exit 1
fi

# ============================================================================
# STEP 2: Install Frontend Dependencies
# ============================================================================

print_header "STEP 2: Installing Frontend Dependencies"

cd frontend

if [ -d "node_modules" ]; then
    print_warning "node_modules already exists. Cleaning..."
    rm -rf node_modules package-lock.json
fi

print_info "Running npm install... (this may take 1-2 minutes)"
npm install

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully!"
else
    print_error "Failed to install dependencies"
    exit 1
fi

cd ..

# ============================================================================
# STEP 3: Setup Environment Variables
# ============================================================================

print_header "STEP 3: Environment Variables Setup"

if [ -f "frontend/.env.local" ]; then
    print_warning "frontend/.env.local already exists"
    read -p "Do you want to overwrite it? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Keeping existing .env.local file"
    else
        cp frontend/.env.local.example frontend/.env.local
        print_success "Created new .env.local from template"
    fi
else
    if [ -f "frontend/.env.local.example" ]; then
        cp frontend/.env.local.example frontend/.env.local
        print_success "Created .env.local from template"
    else
        print_error ".env.local.example not found!"
        exit 1
    fi
fi

print_warning "\nIMPORTANT: You need to configure your API keys!"
print_info "Edit frontend/.env.local and add:"
print_info "  1. NEXT_PUBLIC_SUPABASE_URL"
print_info "  2. NEXT_PUBLIC_SUPABASE_ANON_KEY"
print_info "  3. NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (optional)"

# ============================================================================
# STEP 4: Supabase Instructions
# ============================================================================

print_header "STEP 4: Supabase Setup Instructions"

print_info "1. Create Supabase account at https://supabase.com (FREE)"
print_info "2. Create new project named 'ICASS-2026'"
print_info "3. Wait for project to be ready (~2 minutes)"
print_info "4. Go to SQL Editor and run these files in order:"
echo ""
print_info "   a. backend/complete-database-setup.sql (creates tables)"
print_info "   b. backend/sample-data-tracks.sql (12 tracks)"
print_info "   c. backend/sample-data-speakers.sql (12 speakers)"
print_info "   d. backend/sample-data-sessions.sql (18 sessions)"
print_info "   e. backend/sample-data-authors.sql (26 authors)"
print_info "   f. backend/sample-data-organisers.sql (17 organisers)"
echo ""
print_info "5. Get your API keys:"
print_info "   - Settings > API"
print_info "   - Copy 'Project URL' and 'anon public' key"
print_info "   - Add them to frontend/.env.local"

read -p "Press Enter when you've completed the Supabase setup..."

# ============================================================================
# STEP 5: Verify Environment Setup
# ============================================================================

print_header "STEP 5: Verifying Environment Setup"

if [ -f "frontend/.env.local" ]; then
    # Check if keys are still placeholder values
    if grep -q "your_supabase_project_url_here" frontend/.env.local; then
        print_warning "Supabase URL not configured yet"
        ENV_CONFIGURED=false
    elif grep -q "your_supabase_anon_key_here" frontend/.env.local; then
        print_warning "Supabase Anon Key not configured yet"
        ENV_CONFIGURED=false
    else
        print_success "Environment variables appear to be configured"
        ENV_CONFIGURED=true
    fi
else
    print_error ".env.local file not found"
    ENV_CONFIGURED=false
fi

# ============================================================================
# STEP 6: Start Development Server
# ============================================================================

print_header "STEP 6: Starting Development Server"

if [ "$ENV_CONFIGURED" = true ]; then
    print_success "All checks passed! Starting development server..."
    print_info "\nThe application will be available at: http://localhost:3000"
    print_info "Press Ctrl+C to stop the server\n"
    
    sleep 2
    cd frontend
    npm run dev
else
    print_warning "\nEnvironment not fully configured!"
    print_info "Please complete the Supabase setup and update frontend/.env.local"
    print_info "\nOnce configured, start the dev server with:"
    print_info "  cd frontend && npm run dev"
fi

# ============================================================================
# Setup Complete
# ============================================================================

print_header "Setup Complete!"

print_success "Your ICASS 2026 application is ready!"
echo ""
print_info "Next steps:"
print_info "  1. Open http://localhost:3000 in your browser"
print_info "  2. You should see the splash screens and then the home page"
print_info "  3. Check all features are working"
print_info "  4. Customize content in Supabase as needed"
echo ""
print_info "Documentation:"
print_info "  - Quick Start: QUICK-START.md"
print_info "  - Full Guide: GETTING-STARTED.md"
print_info "  - Deployment: DEPLOYMENT.md"
print_info "  - Troubleshooting: TROUBLESHOOTING.md"
echo ""
print_success "Happy coding! 🚀"
