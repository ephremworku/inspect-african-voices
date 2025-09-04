import { useState, useEffect } from 'react';
import axios from 'axios';

interface VideoItem {
  title: string;
  description: string;
  link: string;
  videoId: string;
  pubDate: string;
  thumbnail?: string;
}

interface RSSData {
  items: VideoItem[];
  channelTitle: string;
  channelDescription: string;
}

export const useRSSFeed = (url: string) => {
  const [data, setData] = useState<RSSData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use a CORS proxy to fetch the RSS feed
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
        const response = await axios.get(proxyUrl);
        
        // Parse the RSS XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        
        // Extract channel info
        const channelTitle = xmlDoc.querySelector('channel title')?.textContent || 'Inspektv';
        const channelDescription = xmlDoc.querySelector('channel description')?.textContent || '';
        
        // Extract items
        const items = Array.from(xmlDoc.querySelectorAll('item')).map(item => {
          const title = item.querySelector('title')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          
          // Extract YouTube video ID from the description iframe
          const descriptionHTML = description;
          const videoIdMatch = descriptionHTML.match(/youtube-nocookie\.com\/embed\/([^"]+)/);
          const videoId = videoIdMatch ? videoIdMatch[1] : '';
          
          const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
          
          return {
            title,
            description: descriptionHTML.replace(/<iframe[^>]*>.*?<\/iframe>/gi, '').replace(/<br>/gi, ' ').replace(/<[^>]*>/g, '').trim(),
            link,
            videoId,
            pubDate,
            thumbnail
          };
        });

        setData({
          items,
          channelTitle,
          channelDescription
        });
      } catch (err) {
        setError('Failed to fetch RSS feed');
        console.error('RSS fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, [url]);

  return { data, loading, error };
};