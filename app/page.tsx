"use client";

import React, { useMemo, useState } from "react";

export default function BookingSoftwareMVP() {
  const [offers, setOffers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [newOffer, setNewOffer] = useState({
    artist: "",
    city: "",
    amount: ""
  });

  const filteredOffers = useMemo(() => {
    if (!search) return offers;
    return offers.filter((o) =>
      (o.artist + o.city).toLowerCase().includes(search.toLowerCase())
    );
  }, [offers, search]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>DOUBLEGBOOKING</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: 300 }}
      />

      <div style={{ marginBottom: 20 }}>
        <h3>Add Offer</h3>

        <input
          placeholder="Artist"
          onChange={(e) =>
            setNewOffer({ ...newOffer, artist: e.target.value })
          }
        />

        <input
          placeholder="City"
          onChange={(e) =>
            setNewOffer({ ...newOffer, city: e.target.value })
          }
        />

        <input
          placeholder="Amount (€)"
          onChange={(e) =>
            setNewOffer({ ...newOffer, amount: e.target.value })
          }
        />

        <button
          onClick={() => {
            setOffers([...offers, { ...newOffer, id: Date.now() }]);
          }}
        >
          Add
        </button>
      </div>

      <h3>Offers</h3>

      {filteredOffers.map((o) => (
        <div
          key={o.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          {o.artist} – {o.city} – €{o.amount}
        </div>
      ))}
    </div>
  );
}import React, { useMemo, useState } from "react";

export default function BookingSoftwareMVP() {
  const [offers, setOffers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [newOffer, setNewOffer] = useState({
    artist: "",
    city: "",
    amount: ""
  });

  const filteredOffers = useMemo(() => {
    if (!search) return offers;
    return offers.filter(o =>
      (o.artist + o.city).toLowerCase().includes(search.toLowerCase())
    );
  }, [offers, search]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>DOUBLEGBOOKING</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: 300 }}
      />

      <div style={{ marginBottom: 20 }}>
        <h3>Add Offer</h3>

        <input
          placeholder="Artist"
          onChange={(e) =>
            setNewOffer({ ...newOffer, artist: e.target.value })
          }
        />

        <input
          placeholder="City"
          onChange={(e) =>
            setNewOffer({ ...newOffer, city: e.target.value })
          }
        />

        <input
          placeholder="Amount (€)"
          onChange={(e) =>
            setNewOffer({ ...newOffer, amount: e.target.value })
          }
        />

        <button
          onClick={() => {
            setOffers([...offers, { ...newOffer, id: Date.now() }]);
          }}
        >
          Add
        </button>
      </div>

      <h3>Offers</h3>

      {filteredOffers.map((o) => (
        <div
          key={o.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          {o.artist} – {o.city} – €{o.amount}
        </div>
      ))}
    </div>
  );
}
