export async function checkBackend() {
    try {
      const res = await fetch(
        "https://YOUR-BACKEND.onrender.com/health"
      );
      return res.ok;
    } catch (err) {
      return false;
    }
  }
  