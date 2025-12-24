export async function checkBackend() {
    try {
      const res = await fetch(
        "https://stylo-ecommerce-1.onrender.com/health"
      );
      return res.ok;
    } catch (err) {
      return false;
    }
  }
  