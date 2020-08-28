// import CarbonAds from "./CarbonAds"
import Apply from "lib/x/Apply"
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import Footer from "./_Footer"
import Reset from "lib/x/Reset"
import SVG from "components/SVG"
import svgToJSX from "utils/svgToJSX"
import target_blank from "lib/x/target_blank"
import Transition from "lib/x/Transition"
import tw from "lib/x/tailwindUnits"
import useHeroiconsReducer from "reducers/useHeroiconsReducer"

import BookOpenSVG from "heroicons-0.4.0/solid/BookOpen"
import ExternalLinkSVG from "heroicons-0.4.0/solid/ExternalLink"
import FlagSVG from "heroicons-0.4.0/solid/Flag"
import SearchOutlineSVG from "heroicons-0.4.0/outline/Search"
import SwitchHorizontalSVG from "heroicons-0.4.0/solid/SwitchHorizontal"

const HEADER_HEIGHT = 640

const Header = () => {
	React.useEffect(() => {
		const handleScroll = () => {
			try {
				const bg = document.getElementById("bg")
				const maskTop = document.getElementById("mask-top")
				const maskBtm = document.getElementById("mask-btm")
				bg.style.opacity = 1 - (window.scrollY / (HEADER_HEIGHT - (48 * 4)))
				maskTop.style.opacity = 0
				if (window.scrollY >= HEADER_HEIGHT - (48 * 4)) {
					maskTop.style.opacity = 1
				}
				maskBtm.style.opacity = 0
				if (window.scrollY >= HEADER_HEIGHT - (48 * 4)) {
					maskBtm.style.opacity = 1
				}
			} catch (error) {
				console.error(error)
			}
		}
		window.addEventListener("scroll", handleScroll, false)
		return () => {
			window.removeEventListener("scroll", handleScroll, false)
		}
	}, [])

	return (
		<Apply className="relative">
			<header style={{ height: HEADER_HEIGHT }}>

				<div className="-my-0.5 absolute top-0 left-0 z-10">
					<a href="TODO" {...target_blank}>
						<p className="px-4 py-0.5 pt-4 pb-0.5 no-underline hover:underline text-white" style={{ opacity: 0.875 }}>
							<span className="inline-flex flex-row items-center">
								<Apply className="relative w-6 h-6 overflow-visible">
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
										<path fill="#664500" d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819" />
										<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" />
										<g className="absolute inset-0">
											<Apply className="transform scale-125 animate-ping" style={{ transformOrigin: "50% 33.33%" }}>
												<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" />
											</Apply>
										</g>
									</svg>
								</Apply>
								<span style={{ width: "1ch" }} />
								Share with your followers on Twitter
							</span>
						</p>
					</a>

					<a href="TODO" {...target_blank}>
						<p className="px-4 py-0.5 pb-4 no-underline hover:underline text-white" style={{ opacity: 0.875 }}>
							<span className="inline-flex flex-row items-center">
								<Apply className="w-6 h-6 overflow-visible">
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
										<path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z" />
										<path fill="#ffffff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
										<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" />
										{/* <g className="absolute inset-0"> */}
										{/* 	<Apply className="transform scale-125 animate-ping" style={{ transformOrigin: "50% 33.33%" }}> */}
										{/* 		<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" /> */}
										{/* 	</Apply> */}
										{/* </g> */}
									</svg>
								</Apply>
								<span style={{ width: "1ch" }} />
								Star website on GitHub
							</span>
						</p>
					</a>
				</div>

				{/* <div className="-my-0.5 py-4 absolute top-0 left-0 z-10"> */}
				{/* 	<a href="TODO" {...target_blank}> */}
				{/* 		<p className="px-4 py-0.5 no-underline hover:underline text-white" style={{ opacity: 0.875 }}> */}
				{/* 			<span className="inline-flex flex-row items-center"> */}
				{/* 				<Apply className="w-6 h-6 transform scale-90"> */}
				{/* 					<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"> */}
				{/* 						<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" /> */}
				{/* 						<path fill="#664500" d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819" /> */}
				{/* 						<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" /> */}
				{/* 					</svg> */}
				{/* 				</Apply>{" "} */}
				{/* 				<span style={{ width: "1ch" }} /> */}
				{/* 				Share with your followers on Twitter */}
				{/* 			</span> */}
				{/* 		</p> */}
				{/* 	</a> */}
				{/* </div> */}
				{/* */}
				{/* <div className="-my-0.5 py-4 absolute top-0 right-0 z-10"> */}
				{/* 	<a href="TODO" {...target_blank}> */}
				{/* 		<p className="px-4 py-0.5 no-underline hover:underline text-white" style={{ opacity: 0.875 }}> */}
				{/* 			<span className="inline-flex flex-row items-center"> */}
				{/* 				Star website on GitHub{" "} */}
				{/* 				<span style={{ width: "1ch" }} /> */}
				{/* 				<Apply className="w-6 h-6 transform scale-90"> */}
				{/* 					<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"> */}
				{/* 						<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" /> */}
				{/* 						<path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z" /> */}
				{/* 						<path fill="#ffffff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" /> */}
				{/* 						<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" /> */}
				{/* 					</svg> */}
				{/* 				</Apply> */}
				{/* 			</span> */}
				{/* 		</p> */}
				{/* 	</a> */}
				{/* </div> */}

				{/* Background */}
				<div className="absolute inset-0">
					<Reset className="w-full h-full">
						<div
							id="bg"
							style={{ backgroundColor: "hsl(270deg 100% 43.75%)" }}
							// style={{ backgroundImage: `radial-gradient(ellipse at top right, hsl(270, 100%, 62.5%) -25%, hsl(270, 100%, 43.75%) 50%, hsl(270, 100%, 37.5%) 100%)` }}
						/>
					</Reset>
					<div className="absolute bottom-0 inset-x-0">
						<Apply className="w-full h-16 text-black">
							{/* TODO: Move preserveAspectRatio to <Apply>. */}
							<svg preserveAspectRatio="none" fill="currentColor" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg">
								{/* <path fillRule="evenodd" clipRule="evenodd" d="M4 -3.49691e-07C6 -1.74846e-07 7.5 0.666667 8 1L0 0.999999C0.583334 0.666666 2 -5.24537e-07 4 -3.49691e-07Z" /> */}
								<path d="M0 0C0.5 0.333333 2 1 4 1C6 1 7.41667 0.333333 8 0V1H4H0V0Z" />
							</svg>
						</Apply>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center h-full">
					<div className="flex flex-col justify-center h-full">

						<Apply className="relative transform">
							<div className="-mt-32">
								<div className="px-1 absolute left-full inset-y-0 flex flex-row items-center">
									<Apply className="w-14 h-14 text-white opacity-50" style={{ marginTop: -3 }}>
										{/* <svg */}
										{/* 	fill="none" */}
										{/* 	strokeLinecap="round" */}
										{/* 	strokeLinejoin="round" */}
										{/* 	strokeWidth={2} */}
										{/* 	stroke="currentColor" */}
										{/* 	viewBox="0 0 24 24" */}
										{/* 	xmlns="http://www.w3.org/2000/svg" */}
										{/* > */}
										{/* 	<path d="M12 2.94385C14.3567 5.05846 17.4561 6.15176 20.618 5.98385C20.867 6.94785 21 7.95785 21 8.99985C21 14.5918 17.176 19.2898 12 20.6218C6.824 19.2898 3 14.5908 3 8.99985C2.99918 7.9824 3.12754 6.96896 3.382 5.98385C6.5439 6.15176 9.64327 5.05846 12 2.94385Z" /> */}
										{/* </svg> */}
										{/* <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> */}
										{/* 	<path fillRule="evenodd" clipRule="evenodd" d="M2.166 4.99934C5.06114 4.96334 7.84481 3.8778 10 1.94434C12.155 3.87816 14.9387 4.96406 17.834 5.00034C17.944 5.65034 18 6.32034 18 7.00134C18 12.2263 14.66 16.6713 10 18.3183C5.34 16.6703 2 12.2253 2 7.00034C2 6.31834 2.057 5.65034 2.166 4.99934Z" /> */}
										{/* </svg> */}
										<FlagSVG />
									</Apply>
								</div>
								<h1
									className="font-medium tracking-tighter leading-none text-white"
									style={{
										fontSize: tw(14),
										fontFamily: "'DM Sans', var(--sans)",
										opacity: 0.875,
									}}
								>
									Heroicons
								</h1>
								<div className="py-1 absolute top-full inset-x-0 flex flex-row justify-center">
									<Apply className="transform scale-110">
										<h6 className="font-semibold tracking-wider leading-none text-xs text-white" style={{ opacity: 0.625 }}>
											UNOFFICIAL HEROICONS VIEWER
										</h6>
									</Apply>
								</div>
							</div>
						</Apply>

					</div>

					{/* Subheader */}
					{/* <h2 className="flex flex-row justify-center items-center flex-wrap text-center font-medium text-xl sm:text-2xl text-cool-gray-100"> */}
					{/* 	<BookOpenSVG className="mr-2 hidden sm:block w-8 h-8" /> */}
					{/* 		MIT open source icons by{" "} */}
					{/* 	<span style={{ width: "0.25em" }} /> */}
					{/* 	<a */}
					{/* 		className="inline-flex flex-row items-center underline" */}
					{/* 		style={{ textDecorationColor: "var(--indigo-500)" }} */}
					{/* 		href="https://twitter.com/steveschoger" */}
					{/* 		{...target_blank} */}
					{/* 	> */}
					{/* 			Steve Schoger{" "} */}
					{/* 		<span style={{ width: "0.25em" }} /> */}
					{/* 		<ExternalLinkSVG className="-mb-1 w-5 h-5 text-indigo-400" /> */}
					{/* 	</a> */}
					{/* </h2> */}

				</div>

			</header>
		</Apply>
	)
}

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

	const handleClick = e => {

		// No-op when the user selected buttonRef.current text:
		const selection = document.getSelection()
		if (selection.rangeCount) {
			const range = selection.getRangeAt(0)
			if (!range.collapsed && buttonRef.current.contains(range.startContainer)) {
				// No-op
				return
			}
		}

		try {
			const originalEl = document.getElementById(icon.name)
			const el = originalEl.cloneNode(true)

			el.removeAttribute("id")
			el.classList.remove(...el.classList)
			el.classList.add(...`${icon.name} w-6 h-6`.split(" "))
			el.setAttribute("xmlns", "http://www.w3.org/2000/svg")

			// Remove unsorted attributes:
			const sortedAttrs = [...el.attributes].sort((a, b) => a.name.localeCompare(b.name))
			for (const each of sortedAttrs) {
				el.removeAttributeNode(each)
			}
			// Add sorted attributes:
			for (const each of sortedAttrs) {
				el.setAttributeNode(each)
			}

			copyToClipboardPolyfill(!state.form.copyAsReact ? el.outerHTML : svgToJSX(el.outerHTML))
			buttonRef.current.focus()
		} catch (error) {
			console.error(`copyToClipboardPolyfill: ${error}`)
		}

		const notifType = "icon"
		const notifInfo = {
			name: icon.name,
			icon: icon[!state.form.showOutline ? "solid" : "outline"],
		}
		dispatch({
			type: "UPDATE_NOTIFICATION",
			notifType,
			notifInfo,
		})

	}

	return (
		// <div className="!rounded-6 shadow-lg h-full">
		<button
			ref={buttonRef}
			className="flex flex-row justify-center items-center w-full h-full bg-cool-gray-800 hover:bg-cool-gray-700 focus:outline-none shadow-none focus:shadow-solid-indigo select-text"
			// style={{ boxShadow: "inset 0 0 0 0.5px var(--cool-gray-900), 0 0 0 0.5px var(--cool-gray-900)" }}
			onClick={handleClick}
			aria-label={icon.name}
		>

			{/* New */}
			{icon.statusNew && (
				<div className="p-3 absolute top-0 right-0">
					<div className="px-2 py-1 bg-indigo-500 rounded-full transform scale-90 origin-top-right">
						<p className="font-semibold leading-none text-cool-gray-100" style={{ fontSize: "0.6875rem" }}>
							<span className="tracking-wider">NE</span>W
						</p>
					</div>
				</div>
			)}

			{/* Icon */}
			<SVG
				id={icon.name}
				className="w-8 h-8 text-cool-gray-100"
				svg={icon[!state.form.showOutline ? "solid" : "outline"]}
			/>

			{/* Icon name */}
			<div className="p-3 absolute bottom-0">
				<p className="text-center text-sm tracking-wide leading-tight text-cool-gray-200">
					{!state.form.search.safe || state.form.search.safe === "new" ? (
						icon.name
					) : (
						(([substr]) => (
							<>
								{substr}
								<span className="p-px text-black bg-yellow-200 rounded">
									{state.form.search.safe}
								</span>
								{icon.name.slice(substr.length + state.form.search.safe.length)}
							</>
						))(icon.name.split(state.form.search.safe, 1))
					)}
				</p>
			</div>

		</button>
		// </div>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form === next.state.form &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

// // TODO: Autofocus is broken?
// const FormSearch = ({ state, dispatch }) => {
// 	const inputRef = React.useRef()
//
// 	useAutoFocusOnMount(inputRef)
//
// 	// FXIME
// 	const [text, setText] = React.useState(() => {
// 		// if (!("URLSearchParams" in window)) {
// 		// 	return ""
// 		// }
// 		// const params = new URLSearchParams(window.location.search)
// 		// return params.get("search") || ""
//
// 		// FIXME
// 		return ""
// 	})
//
// 	const [tooltip, setTooltip] = React.useState("")
//
// 	// Debounces search.
// 	const mounted = React.useRef()
// 	React.useEffect(
// 		React.useCallback(() => {
// 			// Do not debounce the mount search:
// 			if (!mounted.current) {
// 				dispatch({
// 					type: "UPDATE_FORM_SEARCH",
// 					text,
// 				})
// 				mounted.current = true
// 				return
// 			}
// 			const id = setTimeout(() => {
// 				dispatch({
// 					type: "UPDATE_FORM_SEARCH",
// 					text,
// 				})
// 			}, 15)
// 			return () => {
// 				clearTimeout(id)
// 			}
// 		}, [text, dispatch]),
// 		[text],
// 	)
//
// 	// Sets the search query to the URL.
// 	//
// 	// https://stackoverflow.com/a/41542008
// 	React.useEffect(() => {
// 		// FIXME
// 		if (!("URLSearchParams" in window)) {
// 			// No-op
// 			return
// 		}
// 		if (!text) {
// 			window.history.pushState(null, "", "/")
// 		} else {
// 			const params = new URLSearchParams(window.location.search)
// 			params.set("search", text)
// 			window.history.pushState(null, "", `/?${params}`)
// 		}
// 	}, [text])
//
// 	// <Esc> shortcuts.
// 	React.useEffect(() => {
// 		const handler = e => {
// 			if (e.keyCode === 27 || e.key === "Escape") {
// 				e.preventDefault()
// 				if (document.activeElement !== inputRef.current) {
// 					inputRef.current.focus()
// 				} else {
// 					if (!text) {
// 						inputRef.current.blur()
// 						return
// 					}
// 					setText("")
// 				}
// 			}
// 		}
// 		document.addEventListener("keydown", handler)
// 		return () => {
// 			document.removeEventListener("keydown", handler)
// 		}
// 	}, [text])
//
// 	return (
// 		<div
// 			className="!-mt-4 !pt-4 static sm:sticky top-0 z-30"
// 			style={{
// 				// marginLeft: -3,
// 				// marginRight: -3,
// 				boxShadow: `inset 0 ${tw((18 + 4) / 2)} var(--black)`,
// 			}}
// 		>
// 			{/* TODO: Add comment about z-10 */}
// 			<form className="relative z-10" onSubmit={e => e.preventDefault()}>
//
// 				{/* Search bar LHS */}
// 				<div className="px-6 absolute inset-y-0 left-0 pointer-events-none">
// 					<div className="pl-2 flex flex-row items-center h-full">
// 						<SearchOutlineSVG className="w-6 h-6 text-cool-gray-400 transition duration-200 ease-in-out" />
// 					</div>
// 				</div>
//
// 				{/* Search bar */}
// 				<div className="rounded-6 shadow-lg">
// 					<div className="rounded-6 shadow-lg">
// 						<label>
// 							<Reset className="appearance-none w-full">
// 								<input
// 									ref={inputRef}
// 									className="pl-20 pr-36 block w-full h-18 text-xl placeholder-cool-gray-400 text-cool-gray-100 bg-cool-gray-800 rounded-6 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out"
// 									style={{ height: tw(18) }}
// 									type="text"
// 									placeholder="Search Heroicons"
// 									value={text}
// 									onChange={e => setText(e.target.value)}
// 									aria-label="Search 224 Icons"
// 									{...disableAutoCorrect}
// 								/>
// 							</Reset>
// 						</label>
// 					</div>
// 				</div>
//
// 				{/* Search bar RHS */}
// 				<div className="px-6 absolute inset-y-0 right-0">
// 					<div className="pr-2 flex flex-row items-center h-full">
//
// 						<div
// 							className="flex flex-row items-center"
// 							style={{ paddingRight: tw(1) }}
// 							onFocus={e => setTooltip("jsx")}
// 							onBlur={e => setTooltip("")}
// 							onMouseEnter={e => setTooltip("jsx")}
// 							onMouseLeave={e => setTooltip("")}
// 						>
// 							<button
// 								className="p-2 relative text-cool-gray-400 hover:bg-cool-gray-700 focus:bg-cool-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
// 								style={{
// 									color: state.form.copyAsReact && "var(--cool-gray-100)",
// 									backgroundColor: state.form.copyAsReact && "var(--indigo-500)",
// 								}}
// 								onClick={e => {
// 									dispatch({
// 										type: "TOGGLE_FORM_COPY_AS_REACT",
// 										text,
// 									})
// 								}}
// 								aria-label={
// 									!state.form.copyAsReact
// 										? "Click to Enable Copy as JSX"
// 										: "Click to Enable Copy as HTML"
// 								}
// 							>
// 								{tooltip === "jsx" && (
// 									<div className="pt-2 absolute top-full right-0 z-40">
// 										<div className="rounded-md shadow-lg">
// 											<div className="rounded-md shadow-lg">
// 												<div className="px-3 py-2 relative bg-cool-gray-700 rounded-md">
// 													<p className="whitespace-pre font-medium text-sm text-cool-gray-100">
// 														{!state.form.copyAsReact
// 															? "Click to Enable Copy as JSX"
// 															: "Click to Enable Copy as HTML"
// 														}
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								)}
// 								{/* <CodeSVG className="w-6 h-6" /> */}
// 								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// 									<path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
// 								</svg>
// 							</button>
// 						</div>
//
// 						<div
// 							className="flex flex-row items-center"
// 							style={{ paddingLeft: tw(1) }}
// 							onFocus={e => setTooltip("alt")}
// 							onBlur={e => setTooltip("")}
// 							onMouseEnter={e => setTooltip("alt")}
// 							onMouseLeave={e => setTooltip("")}
// 						>
// 							<button
// 								className="p-2 relative text-cool-gray-400 hover:bg-cool-gray-700 focus:bg-cool-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
// 								style={{
// 									color: state.form.showOutline && "var(--cool-gray-100)",
// 									backgroundColor: state.form.showOutline && "var(--indigo-500)",
// 								}}
// 								onClick={e => {
// 									dispatch({
// 										type: "TOGGLE_FORM_SHOW_OUTLINE",
// 										text,
// 									})
// 								}}
// 								aria-label={
// 									!state.form.showOutline
// 										? "Click to Switch to Outline Icons"
// 										: "Click to Switch to Solid Icons"
// 								}
// 							>
// 								{tooltip === "alt" && (
// 									<div className="pt-2 absolute top-full right-0 z-40">
// 										<div className="rounded-md shadow-lg">
// 											<div className="rounded-md shadow-lg">
// 												<div className="px-3 py-2 relative bg-cool-gray-700 rounded-md">
// 													<p className="whitespace-pre font-medium text-sm text-cool-gray-100">
// 														{!state.form.showOutline
// 															? "Click to Switch to Outline Icons"
// 															: "Click to Switch to Solid Icons"
// 														}
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								)}
// 								{/* <SVG className="w-6 h-6" svg={!state.form.showOutline ? PlusCircleSolidSVG : PlusCircleOutlineSVG} /> */}
// 								<SwitchHorizontalSVG className="w-6 h-6" />
// 							</button>
// 						</div>
//
// 					</div>
// 				</div>
//
// 			</form>
//
// 		</div>
// 	)
// }

// {false && (
// 	// {!state.results.length && (
// 		<div className="flex flex-col justify-center items-center h-full">
//
// 			<p className="flex flex-row items-baseline font-medium text-xl text-center text-cool-gray-200">
// 				No results for “
// 				{/* <span className="inline-block truncate" style={{ maxWidth: media.xs ? 128 : 256 }}> */}
// 				{/* FIXME */}
// 				<span className="inline-block truncate" style={{ maxWidth: 256 }}>
// 					{state.form.search.user}.
// 				</span>”
// 			</p>
//
// 			<p className="font-medium text-xl text-center text-cool-gray-200">
// 				Try again or{" "}
// 				<a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://github.com/tailwindlabs/heroicons/issues" {...target_blank}>
// 					request an icon
// 				</a>
// 				.
// 			</p>
//
// 		</div>
// 	// )}
// )}

// TODO
// // <... autoFocus /> does not work; use useAutoFocusOnMount.
// function useAutoFocusOnMount(ref) {
// 	React.useEffect(() => {
// 		ref.current.focus()
// 	}, [])
// }

const Main = () => {
	const [state, dispatch] = useHeroiconsReducer()

	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				dispatch({
					type: "HIDE_NOTIFICATION",
				})
			}, 2.2e3)
			return () => {
				clearTimeout(id)
			}
		}, [dispatch]),
		[state.notif.showKey],
	)

	return (
		<div className="flex flex-row items-start">

			<main className="flex-1">
				<div className="rounded-6 shadow-lg">
					<div className="bg-cool-gray-700 rounded-6 shadow-lg">

						<div
							id="mask-top"
							className="-mb-6 sticky h-6 rounded-t-6 z-10"
							style={{
								top: tw(4),
								boxShadow: `0 -${tw(4)} 0 ${tw(4)} var(--black)`,
								opacity: 0,
							}}
						/>

						<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
							{state.results.length > 0 && (
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 rounded-6 overflow-hidden" style={{ gap: 1 }}>
									{state.results.map((each, x) => (
										<div key={each.name} className="relative" style={{ paddingBottom: "100%" }}>
											<div className="absolute inset-0">
												<MemoIcon
													state={state}
													dispatch={dispatch}
													icon={each}
												/>
											</div>
										</div>
									))}
								</div>
							)}
						</DocumentTitle>

						<div
							id="mask-btm"
							className="-mt-6 sticky h-6 rounded-b-6 z-10"
							style={{
								bottom: tw(4),
								boxShadow: `0 ${tw(4)} 0 ${tw(4)} var(--black)`,
								opacity: 0,
							}}
						/>

					</div>
				</div>
			</main>

			<div className="w-6" />
			<aside className="sticky" style={{ top: tw(4) }}>
				<div className="rounded-6 shadow-lg">
					<div className="w-96 bg-cool-gray-800 rounded-6 shadow-lg">

						<div className="h-20">
						</div>

						<hr className="border-t border-cool-gray-700" />
						<div className="h-20">
						</div>

						<hr className="border-t border-cool-gray-700" />
						<div className="h-20">
						</div>

						<hr className="border-t border-cool-gray-700" />
						<div className="h-40">
						</div>

					</div>
				</div>
			</aside>

		</div>
	)
}

// {/* Notification */}
// <Transition
// 	on={state.notif.showKey}
// 	className="transition duration-200 ease-in-out"
// 	from="opacity-0 transform translate-y-4 pointer-events-none"
// 	to="opacity-100 transform translate-y-0 pointer-events-auto"
// >
// 	<div className="p-3 fixed bottom-0 left-0 z-40">
// 		<div className="rounded-md shadow-lg">
// 			<div className="rounded-md shadow-lg">
// 				<div className="px-3 py-2 flex flex-row bg-indigo-500 rounded-md">
//
// 					{state.notif.notifInfo && (
// 						<div className="flex flex-row items-center h-6">
// 							<SVG className="mr-3 w-5 h-5 text-indigo-50" svg={state.notif.notifInfo.icon} />
// 						</div>
// 					)}
//
// 					{/* Form */}
// 					{state.notif.notifType.startsWith("form") && (
// 						<p className="font-semibold text-indigo-50">
// 							{state.notif.notifType === "form-jsx" && (
// 								!state.form.copyAsReact
// 									? "Enabled Copy as HTML"
// 									: "Enabled Copy as JSX"
// 							)}
// 							{state.notif.notifType === "form-alt" && (
// 								!state.form.showOutline
// 									? "Switched to Solid Icons"
// 									: "Switched to Outline Icons"
// 							)}
// 						</p>
// 					)}
//
// 					{/* Icon */}
// 					{state.notif.notifType === "icon" && (
// 						<p className="font-semibold text-indigo-50">
// 								Copied{" "}
// 							<span className="font-mono">
// 								{state.notif.notifInfo.name}
// 							</span>{" "}
// 								as {!state.form.copyAsReact ? "HTML" : "JSX"}
// 						</p>
// 					)}
//
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </Transition>

const LayoutFragment = () => (
	<>

		<section>
			<Header />
		</section>

		<section className="-mt-32 px-4 flex flex-row justify-center">
			<div className="w-full max-w-screen-xl z-10">
				<Main />
			</div>
		</section>

		<div className="h-24" />
		<section>
			<Footer />
		</section>
		<div className="h-16" />

	</>
)

export default LayoutFragment
