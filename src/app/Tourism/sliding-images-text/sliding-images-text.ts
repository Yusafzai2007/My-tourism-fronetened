import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Tourism } from '../../services/tourism';
import { productResponse, tourismdata } from '../../Interface/product';
import { productResponsedata, tourismproduct } from '../../Interface/products';
import { FormsModule } from '@angular/forms';
import { Booking, BookingItem } from '../../Interface/booking';

@Component({
  selector: 'app-sliding-images-text',
  imports: [CommonModule, FormsModule],
  templateUrl: './sliding-images-text.html',
  styleUrl: './sliding-images-text.css',
})
export class SlidingImagesText implements OnInit, AfterViewInit, OnDestroy {
  dep: productResponsedata[] = [];
  currentIndexes: number[] = [];
  autoSlideInterval: any;

  // 🟢 Modal states
  isModalOpen = false;
  selectedProduct: productResponsedata | null = null;

  constructor(private active: ActivatedRoute, private service: Tourism, private route: Router) {}

  ngOnInit(): void {
    const cityName = this.active.snapshot.paramMap.get('id');
    if (cityName) {
      this.service.singlieProduct(cityName).subscribe((res: tourismproduct) => {
        const product = res.tourism.Product;

        // ✅ Ensure dep is always an array
        this.dep = Array.isArray(product) ? product : [product];
        this.currentIndexes = this.dep.map(() => 0);

        setTimeout(() => {
          this.initializeGallery(this.dep[0].thumbnailimage || []);
        }, 500);
      });
    }

    // 🌀 Auto slide every 4s
    this.autoSlideInterval = setInterval(() => {
      this.dep.forEach((p, idx) => {
        if (p.thumbnailimage?.length > 0) {
          this.nextSlide(idx, p.thumbnailimage.length);
        }
      });
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  ngAfterViewInit() {
    initFlowbite();
  }

  // 🖼️ Image Slider Controls
  nextSlide(productIndex: number, length: number): void {
    this.currentIndexes[productIndex] = (this.currentIndexes[productIndex] + 1) % length;
  }

  prevSlide(productIndex: number, length: number): void {
    this.currentIndexes[productIndex] = (this.currentIndexes[productIndex] - 1 + length) % length;
  }

  // 🌟 Booking Modal Functions
openModal(product: productResponse): void {
  this.selectedProduct = {
    ...product,
    _id: product._id.toString(), // convert to primitive string
  } as unknown as productResponsedata;

  this.isModalOpen = true;
}


  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }

  // 🧩 Image Gallery Initialization
  initializeGallery(images: string[]): void {
    initFlowbite();
    if (images.length === 0) return;

    const mainImage = document.getElementById('mainImage') as HTMLImageElement;
    const lightbox = document.getElementById('lightbox')!;
    const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
    const expandBtn = document.getElementById('expandBtn')!;
    const closeLightbox = document.getElementById('closeLightbox')!;
    const likeBtn = document.getElementById('likeBtn')!;
    const prevBtn = document.getElementById('prevBtn')!;
    const nextBtn = document.getElementById('nextBtn')!;
    const thumbsDesktop = document.getElementById('thumbs-desktop')!;
    const thumbsMobile = document.getElementById('thumbs-mobile')!;

    let currentIndex = 0;

    function renderThumb(container: HTMLElement, i: number) {
      const wrap = document.createElement('button');
      wrap.type = 'button';
      wrap.setAttribute('data-index', i.toString());
      wrap.className =
        'group relative shrink-0 overflow-hidden rounded-xl ring-1 ring-neutral-200 hover:ring-neutral-300 transition ' +
        (container.id === 'thumbs-desktop' ? 'w-full' : 'w-24 h-24');

      const thumb = document.createElement('img');
      thumb.src = images[i];
      thumb.alt = 'Thumbnail ' + (i + 1);
      thumb.className =
        container.id === 'thumbs-desktop'
          ? 'w-full h-24 object-cover md:h-28 lg:h-32'
          : 'w-full h-full object-cover';

      const overlay = document.createElement('div');
      overlay.className =
        'pointer-events-none absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition';

      wrap.appendChild(thumb);
      wrap.appendChild(overlay);
      container.appendChild(wrap);
    }

    function mountThumbnails() {
      thumbsDesktop.innerHTML = '';
      thumbsMobile.innerHTML = '';
      images.forEach((_, i) => {
        renderThumb(thumbsDesktop, i);
        renderThumb(thumbsMobile, i);
      });
    }

    function updateActive(index: number) {
      currentIndex = (index + images.length) % images.length;
      mainImage.src = images[currentIndex];
      lightboxImage.src = images[currentIndex];
      [thumbsDesktop, thumbsMobile].forEach((list) => {
        Array.from(list.children).forEach((btn, i) => {
          const b = btn as HTMLElement;
          b.classList.remove('ring-blue-500', 'ring-2', 'shadow-sm');
          b.classList.add('ring-neutral-200');
          if (i === currentIndex) {
            b.classList.remove('ring-neutral-200');
            b.classList.add('ring-blue-500', 'ring-2', 'shadow-sm');
          }
        });
      });
    }

    function wireThumbClicks() {
      function onClick(e: Event) {
        const target = e.target as HTMLElement;
        const btn = target.closest('button[data-index]') as HTMLElement | null;
        if (!btn) return;
        updateActive(parseInt(btn.getAttribute('data-index')!, 10));
      }
      thumbsDesktop.addEventListener('click', onClick);
      thumbsMobile.addEventListener('click', onClick);
    }

    function openLightbox() {
      lightbox.classList.remove('hidden');
      document.documentElement.classList.add('overflow-hidden');
    }

    function closeLightboxFn() {
      lightbox.classList.add('hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }

    function toggleLike() {
      const pressed = likeBtn.getAttribute('aria-pressed') === 'true';
      likeBtn.setAttribute('aria-pressed', String(!pressed));
      const icon = likeBtn.querySelector('i');
      if (!pressed) {
        likeBtn.classList.add('ring-red-200');
        icon?.classList.add('text-red-600');
      } else {
        likeBtn.classList.remove('ring-red-200');
        icon?.classList.remove('text-red-600');
      }
    }

    mountThumbnails();
    updateActive(0);
    wireThumbClicks();

    prevBtn.addEventListener('click', () => updateActive(currentIndex - 1));
    nextBtn.addEventListener('click', () => updateActive(currentIndex + 1));
    expandBtn.addEventListener('click', openLightbox);
    closeLightbox.addEventListener('click', closeLightboxFn);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightboxFn();
    });
    likeBtn.addEventListener('click', toggleLike);
  }
  /////////////////////////////////////////  booking form /////////////////////////////////////

  bookingdata: BookingItem = {
    product_id: '', // automatically filled from selectedProduct
    order_date: '',
    adult_no: 0,
    child_no: 0,
    transport_type: 0,
    private_adult_no: 0,
    private_child_no: 0,
    private_transport_type: 0,
    total: 0,
  };

  // 🔹 Single product booking function
  bookNow() {
    if (!this.selectedProduct) {
      console.error('No product selected!');
      return;
    }

    // ✅ Ensure primitive string for product_id
    const payload: Booking = {
      products: [
        {
          ...this.bookingdata,
          product_id: this.selectedProduct._id.toString(), // primitive string
        },
      ],
    };

    console.log('Booking payload (single):', payload);

    this.service.booking(payload).subscribe({
      next: (res) => {
        console.log('Booking successful', res);
        // Optional: reset bookingdata
        this.bookingdata = {
          product_id: '',
          order_date: '',
          adult_no: 0,
          child_no: 0,
          transport_type: 0,
          private_adult_no: 0,
          private_child_no: 0,
          private_transport_type: 0,
          total: 0,
        };
        alert('booking successfully');
        this.route.navigateByUrl('payment-images');
        this.closeModal(); // close modal after booking
      },
      error: (err) => console.error('Booking failed', err),
    });
  }
  isPrivateModalOpen = false;


  openPrivateModal() {
  this.isPrivateModalOpen = true;
}

closePrivateModal() {
  this.isPrivateModalOpen = false;
}
}


