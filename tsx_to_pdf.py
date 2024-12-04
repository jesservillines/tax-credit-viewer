from playwright.sync_api import sync_playwright
import time


def convert_tsx_to_pdf(url, output_path, wait_time=2):
    """
    Convert a rendered TSX component to PDF using Playwright.

    Args:
        url (str): URL where the TSX component is rendered (e.g., 'http://localhost:3000')
        output_path (str): Where to save the PDF file
        wait_time (int): Seconds to wait for the component to fully render
    """
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch()

        # Create new page with proper viewport size for A4
        page = browser.new_page(viewport={'width': 1240, 'height': 1754})

        # Go to the page where your TSX component is rendered
        page.goto(url)

        # Wait for content to load and any animations to complete
        time.sleep(wait_time)

        # PDF options for optimal quality
        pdf_options = {
            "scale": 1,
            "margin": {
                "top": "20px",
                "right": "20px",
                "bottom": "20px",
                "left": "20px"
            },
            "print_background": True,  # Fixed parameter name
            "format": "A4"
        }

        # Generate PDF
        page.pdf(path=output_path, **pdf_options)

        # Close browser
        browser.close()


if __name__ == "__main__":
    # Example usage
    url = "http://localhost:3000"  # Your React dev server URL
    output_path = "output.pdf"

    try:
        convert_tsx_to_pdf(url, output_path)
        print(f"PDF has been created at: {output_path}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")