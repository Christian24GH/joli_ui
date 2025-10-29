import {
  Car,
  Command,
  LifeBuoy,
  Send,
  WrenchIcon,
  BookOpenCheckIcon,
  Gauge,
  ChartSpline,
  User,
  TagsIcon,
  HistoryIcon,
  LogsIcon,
  MapPinIcon,
  GlobeIcon
} from "lucide-react"

import { Link } from 'react-router'
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Skeleton } from '@/components/ui/skeleton'

import AuthContext from "../context/AuthProvider"
import { useContext } from "react"

import logo from '@/assets/joli_cropped.png'
const data = {
  /** Logistics 2 NavItems */
  logisticsIINav: [
    {
      NavGroup: {
        NavLabel: 'Analytics',
        NavItems: [
          {
            title: "Dashboard",
            url: '/',
            icon: Gauge,
          },
        ],
      }
    },
    {
      NavGroup: {
        NavLabel: 'Fleet',
        NavItems: [
          {
            title: "Vehicles",
            url: '/vehicles',
            icon: Car,
          },
          {
            title: "Drivers",
            url: '/drivers',
            icon: User,
          },
        ],
      }
    },
    {
      NavGroup: {
        NavLabel: 'Reservation and Dispatch',
        NavItems: [
          {
            title: "Reservations",
            url: '/reservation',
            icon: BookOpenCheckIcon,
          },
          {
            title: "Dispatch Orders",
            url: '/dispatch',
            icon: TagsIcon,
          },
        ],
      }
    },
    {
      NavGroup: {
        NavLabel: 'Logs',
        NavItems: [
          {
            title: "Trip History",
            url: '#',
            icon: HistoryIcon,
          },
          {
            title: "Trip Logs",
            url: '#',
            icon: LogsIcon,
          },
        ],
      }
    }
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }) {
  const { auth, logout, loading } = useContext(AuthContext)
  const user = {
    name: auth?.name || "Sample Name",
    role: auth?.role || "Sample Role",
    avatar: null,
    email: auth?.email || "sample@example.com"
  }

  return (
    <Sidebar collapsible="icon" {...props} className="rounded-md">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>            
            <Link to="/" className="flex justify-center">
              <img src={logo} className="h-10  object-scale-down" alt=""/>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-2">

        {!loading ? ( //Ive set it to false in this sample, if ok change the condition into true
            // Skeleton Placeholder while loading
            <div className="flex flex-col gap-2 px-2 h-full">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="flex-1 w-full" />
              <Skeleton className="flex-1 w-full" />
            </div>
          ) : (
            <>
              
              <NavMain data={data.logisticsIINav}/>
              
          </>
        )
        }
      </SidebarContent>
      <SidebarRail/>
      <SidebarFooter>
        {!loading ? //Ive set it to false in this sample, if ok change the condition into true
          (<Skeleton className="w-full h-full" />) : (<NavUser user={user} logout={logout} />)
        }
      </SidebarFooter>
    </Sidebar>
  );
}



