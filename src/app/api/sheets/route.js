import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function GET() {
  try {
    const testimonialsUrl = process.env.NEXT_PUBLIC_SHEET_TESTIMONIALS_URL;
    const statsUrl = process.env.NEXT_PUBLIC_SHEET_STATS_URL;

    if (!testimonialsUrl || !statsUrl) {
      return NextResponse.json({ error: 'Spreadsheet URLs are missing' }, { status: 500 });
    }

    const [resTestimonials, resStats] = await Promise.all([
      fetch(testimonialsUrl, { next: { revalidate: 60 } }),
      fetch(statsUrl, { next: { revalidate: 60 } })
    ]);

    const csvTestimonials = await resTestimonials.text();
    const csvStats = await resStats.text();

    const testimonialsParsed = Papa.parse(csvTestimonials, { header: true }).data;
    const statsParsed = Papa.parse(csvStats, { header: true }).data;

    return NextResponse.json({
      testimonials: testimonialsParsed,
      stats: statsParsed[0] || { total_students: '1000+', total_books: '300+' }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
