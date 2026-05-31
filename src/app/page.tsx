"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Building, Cake, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Reserve",
          id: "#reservation",
        },
        {
          name: "Events",
          id: "#events",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Trabzon"
      button={{
        text: "Reserve Now",
        href: "#reservation",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "glowing-orb",
      }}
      logoText="Trabzon"
      description="A Luxury Dining Experience in the Heart of Najran"
      buttons={[
        {
          text: "Reserve Your Table",
          href: "#reservation",
        },
        {
          text: "Explore Our Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-with-phone-night_1303-5741.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Story"
      description={[
        "Trabzon Restaurant brings the authentic flavors of Middle Eastern grills and Turkish-inspired pastries to Najran. With a passion for culinary excellence, we craft each dish using premium, locally sourced ingredients to ensure an unforgettable dining experience.",
        "Our elegant and warm atmosphere, combined with dedicated service, makes Trabzon the perfect destination for those seeking luxury and tradition. Discover a heritage of rich flavors and a welcoming ambiance in the heart of Al-Jami'ah District.",
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "experience",
          value: "10+",
          title: "Years of Experience",
          items: [
            "Culinary expertise",
            "Tradition preserved",
          ],
        },
        {
          id: "dishes",
          value: "50+",
          title: "Authentic Dishes",
          items: [
            "Grills & pastries",
            "Middle Eastern cuisine",
          ],
        },
        {
          id: "guests",
          value: "10,000+",
          title: "Happy Guests",
          items: [
            "Loyal diners",
            "Memorable experiences",
          ],
        },
      ]}
      title="Our Achievements"
      description="Celebrating milestones of culinary excellence and cherished guest experiences."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "grill-1",
          name: "Trabzon Mixed Grill",
          price: "85 SAR",
          variant: "Grills",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetables-meat-skewers-grilled-table_23-2148632664.jpg",
          imageAlt: "Trabzon Mixed Grill",
        },
        {
          id: "grill-2",
          name: "Herb-Grilled Chicken",
          price: "65 SAR",
          variant: "Grills",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chicken-chicken-herbs-onion-lemon-board-wooden-board_140725-73657.jpg",
          imageAlt: "Herb-Grilled Chicken",
        },
        {
          id: "grill-3",
          name: "Turkish-Spiced Kofta",
          price: "75 SAR",
          variant: "Grills",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-lula-kebab-with-onion-herbs-sumakh-grilled-vegetables-lavash-white-plate_141793-3839.jpg",
          imageAlt: "Turkish-Spiced Kofta",
        },
        {
          id: "grill-4",
          name: "Grilled Rib Skewers",
          price: "95 SAR",
          variant: "Grills",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-ribs-with-vegetables_140725-44.jpg",
          imageAlt: "Grilled Rib Skewers",
        },
        {
          id: "pastry-1",
          name: "Cheese & Za'atar Pastry",
          price: "25 SAR",
          variant: "Pastries",
          imageSrc: "http://img.b2bpic.net/free-photo/two-fresh-delicious-pastries-gray-surface_114579-25799.jpg",
          imageAlt: "Cheese & Za'atar Pastry",
        },
        {
          id: "pastry-2",
          name: "Minced Meat Pastry",
          price: "30 SAR",
          variant: "Pastries",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-meat-pie-with-red-tomatoes-greens-dark-background-cake-food-bake-dough-pie-pastry-biscuit-oven_179666-46913.jpg",
          imageAlt: "Minced Meat Pastry",
        },
        {
          id: "pastry-3",
          name: "Spinach & Walnut Pastry",
          price: "28 SAR",
          variant: "Pastries",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-rolled-dough-pita-sliced-with-meat-filling-dark-blue-desk_140725-61675.jpg",
          imageAlt: "Spinach & Walnut Pastry",
        },
        {
          id: "appetizer-1",
          name: "Homemade Hummus",
          price: "18 SAR",
          variant: "Appetizers",
          imageSrc: "http://img.b2bpic.net/free-photo/roasted-red-pepper-hummus-white-bowl-wooden-table_123827-28759.jpg",
          imageAlt: "Homemade Hummus",
        },
        {
          id: "appetizer-2",
          name: "Baba Ganoush",
          price: "20 SAR",
          variant: "Appetizers",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-colorful-hummus_23-2149447819.jpg",
          imageAlt: "Baba Ganoush",
        },
        {
          id: "appetizer-3",
          name: "Fattoush Salad",
          price: "22 SAR",
          variant: "Appetizers",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bowl-vegetable-salad-with-bowls-vegetables-pepper-oil-bottle-bell-peppers-side-grey-background_140725-80368.jpg",
          imageAlt: "Fattoush Salad",
        },
        {
          id: "appetizer-4",
          name: "Chicken Fatteh",
          price: "35 SAR",
          variant: "Appetizers",
          imageSrc: "http://img.b2bpic.net/free-photo/roasted-red-pepper-hummus-white-bowl-wooden-table_123827-27915.jpg",
          imageAlt: "Chicken Fatteh",
        },
        {
          id: "drink-1",
          name: "Fresh Ayran",
          price: "12 SAR",
          variant: "Drinks",
          imageSrc: "http://img.b2bpic.net/free-photo/ayran-drink-with-mint-cucumber-glass-isolated-white-background_123827-21359.jpg",
          imageAlt: "Fresh Ayran",
        },
        {
          id: "drink-2",
          name: "Pomegranate Juice",
          price: "18 SAR",
          variant: "Drinks",
          imageSrc: "http://img.b2bpic.net/free-photo/red-fresh-pomegranates-fresh-juice-white-table_114579-43110.jpg",
          imageAlt: "Pomegranate Juice",
        },
        {
          id: "drink-3",
          name: "Turkish Tea",
          price: "10 SAR",
          variant: "Drinks",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-tea-small-white-chocolate-cake-marble-background-high-quality-photo_114579-36536.jpg",
          imageAlt: "Turkish Tea",
        },
        {
          id: "dessert-1",
          name: "Trabzon Baklava",
          price: "20 SAR",
          variant: "Desserts",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-colomba-topping_23-2149341711.jpg",
          imageAlt: "Trabzon Baklava",
        },
        {
          id: "dessert-2",
          name: "Kunafa with Cheese",
          price: "25 SAR",
          variant: "Desserts",
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-dessert-kadayif-black-plate-blue-table_114579-90032.jpg",
          imageAlt: "Kunafa with Cheese",
        },
      ]}
      title="The Menu"
      description="Savor our exquisite selection of premium grills, delicate pastries, and authentic Middle Eastern delights."
    />
  </div>

  <div id="reservation" data-section="reservation">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "reserve-1",
          title: "Seamless Online Booking",
          description: "Easily reserve your table through our convenient online system. Select your preferred date, time, and number of guests for a hassle-free experience.",
          tag: "Quick & Easy",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384821.jpg",
          imageAlt: "Online booking interface",
        },
        {
          id: "reserve-2",
          title: "Personalized Dining",
          description: "Inform us of any special requests or dietary needs, and our team will ensure your dining experience is perfectly tailored to your preferences.",
          tag: "Tailored Service",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-luxury-restaurant_23-2150598346.jpg",
          imageAlt: "Personalized table setting",
        },
        {
          id: "reserve-3",
          title: "Priority Seating",
          description: "Enjoy priority seating for all reservations, guaranteeing you a splendid spot to savor our premium grills and pastries without delay.",
          tag: "Exclusive Access",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-day-s-decorated-table-with-plates-napkins-wine-glasses-forks-knives_181624-30870.jpg",
          imageAlt: "Elegant restaurant entrance",
        },
      ]}
      title="Reserve Your Table"
      description="Book your seat for an unforgettable dining experience at Trabzon. For direct bookings or special requests, please contact us directly."
      buttons={[
        {
          text: "Call Us",
          href: "tel:+966552912020",
        },
        {
          text: "WhatsApp Us",
          href: "https://wa.me/966552912020",
        },
      ]}
    />
  </div>

  <div id="events" data-section="events">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "birthdays",
          badge: "Celebrations",
          badgeIcon: Cake,
          price: "Custom Quote",
          subtitle: "Birthdays & Family Gatherings",
          buttons: [
            {
              text: "Inquire Now",
              href: "#contact",
            },
          ],
          features: [
            "Private dining area",
            "Customizable menu",
            "Dedicated event coordinator",
            "Themed decor options",
          ],
        },
        {
          id: "business",
          badge: "Professional",
          badgeIcon: Building,
          price: "Custom Quote",
          subtitle: "Business Dinners & Corporate Events",
          buttons: [
            {
              text: "Inquire Now",
              href: "#contact",
            },
          ],
          features: [
            "Exclusive meeting spaces",
            "Sophisticated ambiance",
            "Gourmet set menus",
            "Audio-visual equipment",
          ],
        },
        {
          id: "engagement",
          badge: "Romantic",
          badgeIcon: Heart,
          price: "Custom Quote",
          subtitle: "Engagements & Private Celebrations",
          buttons: [
            {
              text: "Inquire Now",
              href: "#contact",
            },
          ],
          features: [
            "Intimate settings",
            "Bespoke decor",
            "Premium champagne & desserts",
            "Personalized service",
          ],
        },
      ]}
      title="Host Your Special Occasion"
      description="From intimate family gatherings to grand corporate events, Trabzon Restaurant creates unforgettable memories with bespoke services."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="A Glimpse of Trabzon"
      description="Where every dish tells a story and every moment is a memory. Explore our culinary world."
      blogs={[
        {
          id: "g-1",
          category: "Interior",
          title: "Elegant Dining Spaces",
          excerpt: "A glimpse into our luxurious restaurant interior, designed for comfort and sophistication.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-black-plate-with-golden-cutlery-dark-surface-cutlery-color-meal-silver-restaurant-food-tray-service-dinner_179666-19690.jpg",
          imageAlt: "Trabzon Restaurant elegant interior",
          authorName: "Trabzon Team",
          date: "2025-01-15",
        },
        {
          id: "g-2",
          category: "Cuisine",
          title: "Art of Plating",
          excerpt: "Our chefs meticulously prepare and present each dish as a work of art.",
          imageSrc: "http://img.b2bpic.net/free-photo/cutting-quiche_23-2147985302.jpg",
          imageAlt: "Chef plating a gourmet dish",
          authorName: "Trabzon Team",
          date: "2025-01-18",
        },
        {
          id: "g-3",
          category: "Desserts",
          title: "Sweet Indulgences",
          excerpt: "A delightful display of our signature Middle Eastern pastries and desserts.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-creamy-cake-with-chocolate-raisins-light-dark-floor_140725-136347.jpg",
          imageAlt: "Dessert table with pastries",
          authorName: "Trabzon Team",
          date: "2025-01-20",
        },
        {
          id: "g-4",
          category: "Beverages",
          title: "Refreshing Elixirs",
          excerpt: "Our selection of handcrafted beverages and traditional drinks, perfect for any meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/filled-champagne-glasses_23-2147729194.jpg",
          imageAlt: "Elegant cocktail drinks",
          authorName: "Trabzon Team",
          date: "2025-01-22",
        },
        {
          id: "g-5",
          category: "Kitchen",
          title: "The Grill Masters",
          excerpt: "Experience the magic behind our succulent grills, prepared by expert hands.",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-master-chef-wearing-uniform-cooking-delicious-beef-steak-kitchen-restaurant_613910-18983.jpg",
          imageAlt: "Chef at grill station",
          authorName: "Trabzon Team",
          date: "2025-01-25",
        },
        {
          id: "g-6",
          category: "Artisan",
          title: "Pastry Perfection",
          excerpt: "Witness the dedication in crafting our delicate, Turkish-inspired pastries.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sweet-candies-colorful-marmalade-blue-surface_114579-61634.jpg",
          imageAlt: "Pastry chef decorating",
          authorName: "Trabzon Team",
          date: "2025-01-28",
        },
        {
          id: "g-7",
          category: "Events",
          title: "Private Celebrations",
          excerpt: "Our exquisite private dining areas, ideal for your most special occasions.",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-hall-with-blue-chairs-decors-wall_140725-8028.jpg",
          imageAlt: "Private dining room setup",
          authorName: "Trabzon Team",
          date: "2025-02-01",
        },
        {
          id: "g-8",
          category: "Ingredients",
          title: "Finest Ingredients",
          excerpt: "The vibrant spices and fresh produce that bring our dishes to life.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-various-spices-saffron-chili-powder-black-pepper-cinnamon-sticks-round-wooden-board_140725-12069.jpg",
          imageAlt: "Middle Eastern spices and ingredients",
          authorName: "Trabzon Team",
          date: "2025-02-03",
        },
        {
          id: "g-9",
          category: "Freshly Baked",
          title: "Warm Bread Selection",
          excerpt: "Enjoy our assortment of freshly baked, traditional breads served with every meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/variety-bread-basket-crackers-stone-surface_114579-40689.jpg",
          imageAlt: "Freshly baked bread basket",
          authorName: "Trabzon Team",
          date: "2025-02-05",
        },
        {
          id: "g-10",
          category: "Ambiance",
          title: "Al Fresco Dining",
          excerpt: "Our charming outdoor seating area offers a delightful dining experience under the stars.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-friends-having-new-year-party-outdoors-daylight_23-2149144038.jpg",
          imageAlt: "Outdoor dining area at restaurant",
          authorName: "Trabzon Team",
          date: "2025-02-07",
        },
        {
          id: "g-11",
          category: "Service",
          title: "Impeccable Service",
          excerpt: "Our dedicated team ensures every guest receives attentive and personalized service.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-notebook-using-smartphone_23-2147793066.jpg",
          imageAlt: "Waiter serving food in a fine dining restaurant",
          authorName: "Trabzon Team",
          date: "2025-02-09",
        },
        {
          id: "g-12",
          category: "Tradition",
          title: "Turkish Coffee Ritual",
          excerpt: "End your meal with a rich, aromatic Turkish coffee, served in traditional style.",
          imageSrc: "http://img.b2bpic.net/free-photo/muslim-woman-pouring-tea_23-2147796714.jpg",
          imageAlt: "Turkish coffee served in a traditional cup",
          authorName: "Trabzon Team",
          date: "2025-02-11",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Connect With Us"
      title="Find Us"
      description="📍 Al-Jami'ah District, Najran, Saudi Arabia\n📞 Phone: +966 055 291 2020\n💬 WhatsApp: +966 055 291 2020 (Click to chat: wa.me/966552912020)\n🕐 Hours: Daily 12:00 PM – 12:00 AM\n\nFor an enhanced experience, we invite you to visit us and discover our exquisite flavors firsthand. Find us easily on Google Maps at coordinates 17.6459537, 44.4702977. Follow us on Instagram, Snapchat, and X for the latest updates and special offers."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Trabzon"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reserve",
              href: "#reservation",
            },
            {
              label: "Events",
              href: "#events",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Snapchat",
              href: "#",
            },
            {
              label: "X",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Trabzon Restaurant. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
