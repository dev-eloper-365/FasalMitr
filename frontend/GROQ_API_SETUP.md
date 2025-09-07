# Groq API Setup Guide

## 🚨 **Current Issue:**
The ChatBot is showing **401 Unauthorized** errors because the Groq API key is not properly configured.

## 🔧 **How to Fix:**

### **Option 1: Get a New Groq API Key (Recommended)**

1. **Visit Groq Console**: https://console.groq.com/
2. **Sign up/Login** to your account
3. **Create a new API key**
4. **Update your environment variables**:

```env
# In your .env file
VITE_GROQ_API_KEY=your_actual_groq_api_key_here
```

### **Option 2: Disable ChatBot Temporarily**

If you don't want to use the ChatBot feature, you can:

1. **Remove the ChatBot route** from your app
2. **Or keep it** - it will show a helpful message about API key configuration

## 📝 **Current Status:**

The ChatBot component now handles missing/invalid API keys gracefully:

- ✅ **No API key**: Shows "ChatBot is currently unavailable" message
- ✅ **Invalid API key**: Shows "API key is invalid" message  
- ✅ **No more 401 errors**: Proper error handling implemented

## 🚀 **For Production Deployment:**

### **Vercel Environment Variables:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add: `VITE_GROQ_API_KEY` = `your_actual_api_key`

### **Local Development:**
1. Update your `.env` file with the real API key
2. Restart your development server: `npm run dev`

## 🎯 **Expected Result:**
After configuring a valid Groq API key:
- ✅ ChatBot will work properly
- ✅ No more 401 errors
- ✅ AI responses will be generated
- ✅ Voice recognition will work

## 💡 **Alternative Solutions:**

If you don't want to use Groq API, you can:
1. **Remove ChatBot entirely** from the application
2. **Use a different AI service** (OpenAI, Anthropic, etc.)
3. **Implement a simple rule-based chatbot** for basic responses

The ChatBot is now properly configured to handle API key issues gracefully! 🎉
